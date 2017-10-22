@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\..\..\_esprima@4.0.0@esprima\bin\esvalidate.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\..\..\_esprima@4.0.0@esprima\bin\esvalidate.js" %*
)