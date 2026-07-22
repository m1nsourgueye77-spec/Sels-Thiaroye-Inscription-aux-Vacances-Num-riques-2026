function doPost(e){


const sheet = SpreadsheetApp
.openById("ID_DE_VOTRE_GOOGLE_SHEET")
.getSheetByName("Inscriptions");



const data = JSON.parse(e.postData.contents);



sheet.appendRow([


new Date(),


data.prenoms,

data.nom,

data.telephone,


data.informatique,

data.permis,

data.coran,


data.echeance,

data.montant,

data.mode,

data.datePaiement,


data.engagement


]);



return ContentService

.createTextOutput("OK")

.setMimeType(ContentService.MimeType.TEXT);


}
