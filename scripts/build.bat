@echo off
echo ============================================
echo   BUILD SPK TOPSIS - Desktop App (.exe)
echo ============================================
echo.

echo [1/3] Checking dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: npm install failed!
    pause
    exit /b 1
)

echo.
echo [2/3] Creating icon...
call node scripts/create-icon.js

echo.
echo [3/3] Building .exe installer...
call npx electron-builder --win
if %errorlevel% neq 0 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)

echo.
echo ============================================
echo   BUILD SELESAI!
echo   File installer ada di folder: dist/
echo ============================================
pause
