/**
 * SPK TOPSIS - UI Script
 * Super smooth SPA-like navigation
 */

(function() {
    'use strict';

    // Apply dark mode IMMEDIATELY before DOM render to prevent flash
    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark-preload');
        if (document.body) document.body.classList.add('dark');
    }

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        // Apply dark mode to body
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark');
        }

        setupSecurity();
        setupDarkMode();
        setupSidebarToggle();
        setupDeleteButtons();
        setupResponsive();
        setupSmoothNav();
    }

    // ============================================
    // SECURITY
    // ============================================
    function setupSecurity() {
        document.addEventListener('contextmenu', e => e.preventDefault());
        document.addEventListener('keydown', e => {
            if (e.key === 'F12') e.preventDefault();
            if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) e.preventDefault();
            if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S')) e.preventDefault();
        });
    }

    // ============================================
    // DARK MODE
    // ============================================
    function setDarkMode(enabled) {
        if (enabled) {
            document.body.classList.add('dark');
            document.documentElement.classList.add('dark-preload');
            updateDarkIcon(true);
        } else {
            document.body.classList.remove('dark');
            document.documentElement.classList.remove('dark-preload');
            updateDarkIcon(false);
        }
        localStorage.setItem('darkMode', enabled);
    }

    function updateDarkIcon(isDark) {
        const icon = document.getElementById('darkModeIcon');
        if (!icon) return;
        if (isDark) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    function setupDarkMode() {
        updateDarkIcon(document.body.classList.contains('dark'));
        // Use event delegation so it works after content swap
        document.addEventListener('click', e => {
            if (e.target.closest('#darkModeToggle')) {
                setDarkMode(!document.body.classList.contains('dark'));
            }
        });
    }

    // ============================================
    // SIDEBAR TOGGLE
    // ============================================
    function setupSidebarToggle() {
        if (localStorage.getItem('sidebarCollapsed') === 'true') {
            document.body.classList.add('sidebar-collapsed');
        }
        // Event delegation
        document.addEventListener('click', e => {
            if (e.target.closest('#sidebarToggle')) {
                document.body.classList.toggle('sidebar-collapsed');
                localStorage.setItem('sidebarCollapsed', document.body.classList.contains('sidebar-collapsed'));
            }
        });
    }

    // ============================================
    // DELETE BUTTONS (event delegation)
    // ============================================
    function setupDeleteButtons() {
        document.addEventListener('click', e => {
            const btn = e.target.closest('.btn-delete');
            if (!btn) return;
            e.preventDefault();
            const url = btn.getAttribute('data-url');
            const name = btn.getAttribute('data-name');
            const isDark = document.body.classList.contains('dark');

            Swal.fire({
                title: 'Hapus Data?',
                text: '"' + name + '" akan dihapus permanen.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#ef4444',
                cancelButtonColor: '#64748b',
                confirmButtonText: 'Ya, Hapus',
                cancelButtonText: 'Batal',
                background: isDark ? '#1e293b' : '#ffffff',
                color: isDark ? '#f1f5f9' : '#1e293b'
            }).then(result => {
                if (result.isConfirmed) navigateTo(url);
            });
        });
    }

    function setupResponsive() {
        if (window.innerWidth <= 768) {
            document.body.classList.add('sidebar-collapsed');
        }
    }

    // ============================================
    // SMOOTH NAVIGATION
    // ============================================
    let isNavigating = false;
    let chartInstances = [];

    function destroyCharts() {
        // Destroy any existing Chart.js instances to prevent memory leak
        if (window.Chart && window.Chart.instances) {
            Object.values(window.Chart.instances).forEach(chart => {
                try { chart.destroy(); } catch (e) {}
            });
        }
        chartInstances = [];
    }

    function setupSmoothNav() {
        document.addEventListener('click', e => {
            const link = e.target.closest('a[href]');
            if (!link) return;

            // Skip non-navigable links
            if (link.classList.contains('btn-delete')) return;
            const href = link.getAttribute('href');
            if (!href || href === '#') return;
            if (href.startsWith('http') && !href.includes('localhost')) return;
            if (href.startsWith('#') || href.startsWith('javascript:')) return;
            if (href.startsWith('blob:') || href.startsWith('data:')) return; // file downloads
            if (link.hasAttribute('download')) return; // download links
            if (link.getAttribute('target')) return;
            if (link.closest('form')) return;

            e.preventDefault();
            navigateTo(href);
        });

        window.addEventListener('popstate', () => {
            window.location.reload();
        });
    }

    function navigateTo(url) {
        if (isNavigating) return;
        isNavigating = true;

        const wrapper = document.getElementById('page-content-wrapper');
        if (!wrapper) {
            window.location.href = url;
            return;
        }

        // Smooth fade out
        wrapper.style.transition = 'opacity 0.18s ease-out';
        wrapper.style.opacity = '0';

        // Fetch new page in parallel with fade
        const fetchPromise = fetch(url).then(r => {
            if (r.redirected) {
                window.location.href = r.url;
                return null;
            }
            return r.text();
        });

        // Wait for fade out + fetch to both complete
        Promise.all([
            fetchPromise,
            new Promise(resolve => setTimeout(resolve, 180))
        ]).then(([html]) => {
            if (!html) return;

            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const newContent = doc.getElementById('page-content-wrapper');
            const newSidebar = doc.getElementById('sidebar');

            if (!newContent) {
                window.location.href = url;
                return;
            }

            // Cleanup old charts BEFORE swap
            destroyCharts();

            // Update sidebar (only the inner content to avoid losing references)
            if (newSidebar) {
                const currentSidebar = document.getElementById('sidebar');
                if (currentSidebar) {
                    currentSidebar.innerHTML = newSidebar.innerHTML;
                }
            }

            // Update title
            const newTitle = doc.querySelector('title');
            if (newTitle) document.title = newTitle.textContent;

            // Swap content
            wrapper.innerHTML = newContent.innerHTML;

            // Update URL
            history.pushState(null, '', url);

            // Execute scripts in new content (Chart.js, etc.)
            executeScripts(wrapper);

            // Reset scroll
            wrapper.scrollTop = 0;
            window.scrollTo(0, 0);

            // Smooth fade in
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    wrapper.style.opacity = '1';
                });
            });

            isNavigating = false;
        }).catch(err => {
            console.error('Navigation error:', err);
            window.location.href = url;
            isNavigating = false;
        });
    }

    function executeScripts(container) {
        const scripts = container.querySelectorAll('script');
        scripts.forEach(oldScript => {
            try {
                const newScript = document.createElement('script');
                // Copy all attributes
                Array.from(oldScript.attributes).forEach(attr => {
                    newScript.setAttribute(attr.name, attr.value);
                });
                // Wrap inline scripts in try-catch to prevent breaking the page
                if (!oldScript.src && oldScript.textContent) {
                    newScript.textContent = 'try {' + oldScript.textContent + '} catch(e) { console.error("Inline script error:", e); }';
                } else {
                    newScript.textContent = oldScript.textContent;
                }
                oldScript.parentNode.replaceChild(newScript, oldScript);
            } catch (err) {
                console.error('Failed to execute script:', err);
            }
        });
    }
})();
