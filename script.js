const echeance = document.querySelector("[name=echeance]");
const montant = document.querySelector("[name=montant]");

echeance.addEventListener("change", () => {

    if(echeance.value==="Inscription"){
        montant.value=10000;
    }

    else if(echeance.value==="Deuxième mensualité"){
        montant.value=10000;
    }

    else if(echeance.value==="Paiement complet"){
        montant.value=20000;
    }

}); // ← fermeture de addEventListener("change")

const url="https://script.google.com/macros/s/AKfycbytgwHAxbWHyRIX2zygeWZVk7bwz3NFcHIQ05Cnvi0rkfyRixRKtKoWTCr6uRHO-Idi/exec";

document.getElementById("form").addEventListener("submit",function(e){

e.preventDefault();


if(
!this.informatique.checked &&
!this.permis.checked &&
!this.coran.checked
){

alert("Veuillez choisir au moins une formation");

return;

}


const data={

    
prenoms:this.prenoms.value,

nom:this.nom.value,

telephone:this.telephone.value,

informatique:this.informatique.checked?"Oui":"Non",

permis:this.permis.checked?"Oui":"Non",

coran:this.coran.checked?"Oui":"Non",

echeance:this.echeance.value,

montant:this.montant.value,

mode:this.mode.value,

datePaiement:this.datePaiement.value,

engagement:this.engagement.checked?"Oui":"Non"

};



fetch(url,{
method:"POST",
body:JSON.stringify(data)

})

.then(r=>r.text())

.then(()=>{

document.getElementById("message").innerHTML="✅ Inscription enregistrée.";

this.reset();

})

.catch(()=>{

document.getElementById("message").innerHTML=
"❌ Erreur.";

});

});


