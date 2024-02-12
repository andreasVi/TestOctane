Dim value

value = inputbox("Masukkan angka:")


If value > 0 Then
	msgbox "valid"
	'micPass jika test valid dengan kondisi yang ditentukan -> report akan sukses (O)
	reporter.ReportEvent micPass, "Valid", "Angka yang  dimasukkan diatas 0"
Else
	msgbox "invalid"
	'micFail jika test invalid dengan kondisi yang ditentukan -> report akan error (X)
	reporter.ReportEvent micFail, "Invalid", "Angka yang dimasukkan dibawah 0"
End If
