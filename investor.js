// document.addEventListener('DOMContentLoaded', function() {
//     const investorCards = document.querySelectorAll('.investor-card');
//     const modal = document.getElementById('modal');
//     const contributionsText = document.getElementById('contributionsText');
//     const closeModalButton = document.querySelector('.close');

//     investorCards.forEach(card => {
//         card.addEventListener('click', function() {
//             const contributions = card.getAttribute('data-contributions');
//             contributionsText.textContent = contributions;
//             modal.style.display = 'block';
//         });
//     });

//     closeModalButton.addEventListener('click', function() {
//         modal.style.display = 'none';
//     });

//     window.addEventListener('click', function(event) {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const investorCards = document.querySelectorAll('.investor-card');
//     // const modal = document.getElementById('modal');
//     // const contributionsText = document.getElementById('contributionsText');
//     // const investorModalPhoto = document.getElementById('investorModalPhoto');
//     const closeModalButton = document.querySelector('.close');

//     // Function to show modal with contributions and photo
//     function showInvestorDetails(contributions, photoSrc) {
//         contributionsText.textContent = contributions;
//         investorModalPhoto.src = photoSrc;
//         modal.style.display = 'block';
//     }

//     // Add click event listener to each investor card
//     investorCards.forEach(card => {
//         card.addEventListener('click', function() {
//             let appending = document.querySelector(".new");
//             console.log ("heeee")
//             appending.innerHTML='<div id="modal" class="modal"><div class="modal-content"><span class="close">&times;</span><p id="contributionsText"></p><img src="" alt="Investor Photo" id="investorModalPhoto" class="modal-photo"></div></div>'
//             const contributions = card.getAttribute('data-contributions');
//             const photoSrc = card.querySelector('.investor-photo').src;
//             showInvestorDetails(contributions, photoSrc);
//  });
//     });
//     closebutton= document.querySelector(".close")
//     closebutton.addEventListener(click,function(){
//         appending.innerHTML="none";
//     })


//     // Add click event listener to close modal button
//     closeModalButton.addEventListener('click', function() {
//         modal.style.display = 'none';

//     });

//     // Close modal when clicking outside of modal content
//     window.addEventListener('click', function(event) {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const investorCards = document.querySelectorAll('.investor-card');
    const modal = document.getElementById('modal');
    const contributionsText = document.getElementById('contributionsText');
    const investorModalPhoto = document.getElementById('investorModalPhoto');
    const closeModalButton = document.querySelector('.close');

    // Function to show modal with contributions and photo
    function showInvestorDetails(contributions, photoSrc) {
        contributionsText.textContent = contributions;
        investorModalPhoto.src = photoSrc;
        modal.style.display = 'block';
    }

    // Add click event listener to each investor card
    investorCards.forEach(card => {
        card.addEventListener('click', function() {
            const contributions = card.getAttribute('data-contributions');
            const photoSrc = card.querySelector('.investor-photo').src;
            showInvestorDetails(contributions, photoSrc);
        });
    });

    // Close modal function
    function closeModal() {
        modal.style.display = 'none';
    }

    // Add click event listener to close modal button
    closeModalButton.addEventListener('click', closeModal);

    // Close modal when clicking outside of modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
