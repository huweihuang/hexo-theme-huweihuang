@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\..\..\_sshpk@1.13.1@sshpk\bin\sshpk-sign" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\..\..\_sshpk@1.13.1@sshpk\bin\sshpk-sign" %*
)