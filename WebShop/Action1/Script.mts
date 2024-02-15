Call OpenBrowser @@ hightlight id_;_65898_;_script infofile_;_ZIP::ssf16.xml_;_
Call Register
Call Logout

Function OpenBrowser
	SystemUtil.Run("C:\Program Files\Google\Chrome\Application\chrome.exe")
	Browser("Demo Web Shop").Navigate "https://demowebshop.tricentis.com/"
End Function

Function Register
	Browser("Demo Web Shop").Page("Demo Web Shop").Link("Register").Click
	Browser("Demo Web Shop").Page("Demo Web Shop. Register").WebRadioGroup("Gender").Select DataTable("Gender", dtGlobalSheet) @@ script infofile_;_ZIP::ssf4.xml_;_
	Browser("Demo Web Shop").Page("Demo Web Shop. Register").WebEdit("FirstName").Set DataTable("FirstName", dtGlobalSheet) @@ script infofile_;_ZIP::ssf5.xml_;_
	Browser("Demo Web Shop").Page("Demo Web Shop. Register").WebEdit("LastName").Set DataTable("LastName", dtGlobalSheet) @@ script infofile_;_ZIP::ssf6.xml_;_
	Browser("Demo Web Shop").Page("Demo Web Shop. Register").WebEdit("Email").Set DataTable("Email", dtGlobalSheet) @@ script infofile_;_ZIP::ssf7.xml_;_
	Browser("Demo Web Shop").Page("Demo Web Shop. Register").WebEdit("Password").SetSecure DataTable("Password", dtGlobalSheet) @@ script infofile_;_ZIP::ssf9.xml_;_
	Browser("Demo Web Shop").Page("Demo Web Shop. Register").WebEdit("ConfirmPassword").SetSecure DataTable("ConfirmPassword", dtGlobalSheet) @@ script infofile_;_ZIP::ssf10.xml_;_
'	Browser("Demo Web Shop").Page("Demo Web Shop. Register").WebButton("Register").Click @@ script infofile_;_ZIP::ssf11.xml_;_
'	Browser("Demo Web Shop").Page("Demo Web Shop. Register_2").WebButton("Continue").Click
End Function @@ hightlight id_;_131966_;_script infofile_;_ZIP::ssf13.xml_;_
 @@ script infofile_;_ZIP::ssf14.xml_;_
Function Logout
'	Browser("Demo Web Shop").Page("Demo Web Shop").Link("Log out").Click
	Browser("Demo Web Shop").Close
End Function
