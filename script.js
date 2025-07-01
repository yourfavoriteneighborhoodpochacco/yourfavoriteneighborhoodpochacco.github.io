/* Search & voice functionality – WIP
<script>
  const searchBar = document.getElementById('searchBar');
const voiceSearchBtn = document.getElementById('voiceSearchBtn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Sorry, your browser doesn't support Speech Recognition. Try Chrome or Edge.");
} else {
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.continuous = false;

  voiceSearchBtn.addEventListener('click', () => {
    recognition.start();
  });

  recognition.onstart = () => {
    console.log('🎙️ Listening...');
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    searchBar.value = transcript;
    filterSections(transcript.toLowerCase());
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
  };
}

searchBar.addEventListener('input', () => {
  filterSections(searchBar.value.toLowerCase());
});

function filterSections(query) {
  const sections = document.querySelectorAll('main section');
  sections.forEach(section => {
    const text = section.textContent.toLowerCase();
    const id = section.id.toLowerCase();
    const match = text.includes(query) || id.includes(query);
    section.style.display = match ? 'block' : 'none';
  });
}
</script>
*/
