SystemUtil.Run "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"


WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set DataTable("username", dtGlobalSheet) @@ hightlight id_;_2038981464_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure DataTable("password", dtGlobalSheet) @@ hightlight id_;_1983712096_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2038154808_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Dialog("Login Failed").Static("Incorrect username or").Output CheckPoint("Incorrect username or password.  Use: Username=john, Password=HP") @@ hightlight id_;_330202_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Dialog("Login Failed").WinButton("OK").Click @@ hightlight id_;_264664_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_199090_;_script infofile_;_ZIP::ssf6.xml_;_
