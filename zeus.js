function selectJob(jobName) {
    // Guardamos la elección en el navegador del usuario
    localStorage.setItem('selectedJob', jobName);
    
    document.getElementById('step-1').style.display = 'none';
    document.getElementById('step-2').style.display = 'block';
    
    let bar = document.getElementById('bar');
    let status = document.getElementById('status-text');
    let width = 0;
    
    let messages = [
        "> Initializing secure recruitment connection...",
        "> Scanning database for available slots...",
        "> Verifying device location (USA)...",
        "> Confirming background check eligibility...",
        "> Finalizing direct hire link..."
    ];

    let messageIndex = 0;
    let interval = setInterval(() => {
        width += 2;
        bar.style.width = width + '%';
        
        if(width % 20 == 0 && messageIndex < messages.length) {
            status.innerText = messages[messageIndex];
            messageIndex++;
        }
        
        if(width >= 100) {
            clearInterval(interval);
            showFinalStep();
        }
    }, 100);
}

function showFinalStep() {
    document.getElementById('step-2').style.display = 'none';
    document.getElementById('step-3').style.display = 'block';
}

function startVerification() {
    // Aquí es donde el usuario hace clic y se dispara el Content Locker de AdBlueMedia
    console.log("Cargando Content Locker...");
    // Si tienes el script de AdBlueMedia, se activará automáticamente aquí.
    alert("Please complete the verification to access the " + localStorage.getItem('selectedJob') + " link.");
}
