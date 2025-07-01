<script>
  const searchBar = document.getElementById('searchBar');
  const voiceSearchBtn = document.getElementById('voiceSearchBtn');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Sorry, your browser does not support Speech Recognition. Try Chrome or Edge.");
  }

  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    voiceSearchBtn.addEventListener('click', () => {
      recognition.start();
    });

    recognition.addEventListener('result', (event) => {
      const transcript = event.results[0][0].transcript;
      searchBar.value = transcript;
      filterSections(transcript.toLowerCase());
    });

    recognition.addEventListener('error', (e) => {
      console.error('Speech recognition error:', e);
    });
  } else {
    voiceSearchBtn.disabled = true;
    voiceSearchBtn.title = "Voice recognition not supported";
  }

  searchBar.addEventListener('input', () => {
    filterSections(searchBar.value.toLowerCase());
  });

  function filterSections(query) {
  const sections = document.querySelectorAll('main section');

  sections.forEach(section => {
    const sectionText = section.textContent.toLowerCase();
    const sectionId = section.id.toLowerCase();
    const matches = sectionText.includes(query) || sectionId.includes(query);

    section.style.display = matches ? 'block' : 'none';
  });
}
</script>
