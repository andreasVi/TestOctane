]'open application'
SystemUtil.Run("C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe")
'CreateObject("WScript.Shell").Run("""C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe""")'

WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_2031331368_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "653b5ee23bb3e6f88394" @@ hightlight id_;_2031332280_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2031336504_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfImage("WpfImage").Click 3,9 @@ hightlight id_;_2031336552_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("Su").SetDate "2-Nov-2023" @@ hightlight id_;_2031331848_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select DataTable("classList", dtGlobalSheet) @@ hightlight id_;_2031321288_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_1974631280_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("Su").SetDate "2-Nov-2023" @@ hightlight id_;_2031331848_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select DataTable("classList", dtGlobalSheet) @@ hightlight id_;_2031321288_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_1974631280_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1971733288_;_script infofile_;_ZIP::ssf16.xml_;_

WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 1,3 @@ hightlight id_;_1971732664_;_script infofile_;_ZIP::ssf17.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1971733576_;_script infofile_;_ZIP::ssf18.xml_;_

WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set DataTable("name_pass", dtGlobalSheet) @@ hightlight id_;_1974629696_;_script infofile_;_ZIP::ssf19.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_1971734872_;_script infofile_;_ZIP::ssf20.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_656144_;_script infofile_;_ZIP::ssf21.xml_;_


If amountRequested <= 100000 and age > 18 Then
	Browser("UiBank").Page("UiBank_4").Output CheckPoint("UiBank")
Else
	Browser("UiBank").Page("UiBank_5").Output CheckPoint("UiBank_2")
End If

Dim vTemp
vTemp = Browser("UiBank_2").Page("UiBank_2").WebEdit("email").GetROProperty 

