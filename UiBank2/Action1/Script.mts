'Call OpenBrowser
Call GotoLoan
Call InputData
Call ValidateData
Call CloseBrowser


Function OpenBrowser
	SystemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe","https://uibank.uipath.com/welcome"
'	SystemUtil.Run "C:\Program Files\Mozilla Firefox\firefox.exe","https://uibank.uipath.com/welcome"
End Function

Function GotoLoan
	Browser("UiBank").Navigate "https://uibank.uipath.com/welcome"
	Browser("UiBank").Page("UiBank").WebElement("ProductsLoansCredit CardsMobil").Click
	Browser("UiBank").Page("UiBank").WebButton("dropdownMenuLink").Click @@ script infofile_;_ZIP::ssf3.xml_;_
	Browser("UiBank").Page("UiBank").Link("Loans").Click
	Browser("UiBank").Page("UiBank_2").WebButton("Apply For A Loan").Click
End Function

Function InputData
	Browser("UiBank").Page("UiBank_3").WebEdit("email").Set DataTable("email", dtGlobalSheet)
	Browser("UiBank").Page("UiBank_3").WebNumber("amount").Set DataTable("amount_requested", dtGlobalSheet) @@ script infofile_;_ZIP::ssf7.xml_;_
	Browser("UiBank").Page("UiBank_3").WebList("term").Select DataTable("loan_term", dtGlobalSheet) @@ script infofile_;_ZIP::ssf8.xml_;_
	Browser("UiBank").Page("UiBank_3").WebNumber("income").Set DataTable("income", dtGlobalSheet) @@ script infofile_;_ZIP::ssf9.xml_;_
	Browser("UiBank").Page("UiBank_3").WebNumber("age").Set DataTable("age", dtGlobalSheet) @@ script infofile_;_ZIP::ssf10.xml_;_
	Browser("UiBank").Page("UiBank_3").WebButton("Submit Loan Application").Click
End Function

Function ValidateData
	If Browser("UiBank_2").Page("UiBank").WebElement("Sorry, at this time you").Exist(3) Then
		reporter.ReportEvent micFail, "Invalid", "Tidak sesuai dengan syarat"
	Else 
		reporter.ReportEvent micPass, "Valid", "Sudah sesuai dengan syarat"
	End If
End Function

Function CloseBrowser
	Browser("UiBank_2").Close
'	SystemUtil.CloseProcessByName("chrome.exe")
End Function
