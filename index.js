document.addEventListener('DOMContentLoaded', () => {

    const names = ['bill', 'joe', 'kate',];
    const occupations = ['stripper', 'assassin', 'viking'];
  
    let freelancers = [ //starting freelancers
        { name: 'Alice', occupation: 'writer', startingPrice: 30 },
        { name: 'Bob', occupation: 'teacher', startingPrice: 50 }
    ];
  
    function calculateAveragePrice() {
        const total = freelancers.reduce((acc, freelancer) => acc + freelancer.startingPrice, 0);
        return total / freelancers.length;
        //this line of code calculates the average cost of all posted services.
    }
  
    function renderFreelancers() {
        const freelancersContainer = document.querySelector('#freelancers');
        freelancersContainer.innerHTML = '';
        
        freelancers.forEach(freelancer => {
            const freelancerDiv = document.createElement('div');
            freelancerDiv.innerText = `${freelancer.name}, the ${freelancer.occupation}, with a starting price of $${freelancer.startingPrice}`;
            freelancersContainer.appendChild(freelancerDiv);
        });
  
        
        document.querySelector('#average-price').innerText = `Average Starting Price: $${calculateAveragePrice().toFixed(2)}`;
    }
  
    function generateRandomFreelancer() {
        const name = names[Math.floor(Math.random() * names.length)];
        const occupation = occupations[Math.floor(Math.random() * occupations.length)];
        const startingPrice = Math.floor(Math.random() * 100) + 20;
  
        return { name, occupation, startingPrice };
    }
  
    renderFreelancers();
  
    setInterval(() => {
        freelancers.push(generateRandomFreelancer());
        renderFreelancers();
    }, 3000); 
  
  });




    