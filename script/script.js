// day and date update function 

const now = new Date();

const day = now.toLocaleString('en-US', { weekday: 'short'});

const date = now.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });


document.getElementById('day').textContent=day ;
document.getElementById('date').textContent=date ;
