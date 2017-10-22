@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\..\..\_js-yaml@3.10.0@js-yaml\bin\js-yaml.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\..\..\_js-yaml@3.10.0@js-yaml\bin\js-yaml.js" %*
)