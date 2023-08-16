const topicButtons = document.querySelectorAll('.buttons button');
const answerSections = document.querySelectorAll('.buttons div[id^="answer"]');

topicButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Hide all answer sections
        answerSections.forEach((section) => {
            section.style.display = 'none';
        });
        
        // Show the clicked answer section
        answerSections[index].style.display = 'block';
    });
});
