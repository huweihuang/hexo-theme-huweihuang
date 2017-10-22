@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\..\..\_escodegen@1.9.0@escodegen\bin\esgenerate.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\..\..\_escodegen@1.9.0@escodegen\bin\esgenerate.js" %*
)