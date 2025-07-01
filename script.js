<script>
  const searchBar = document.getElementById('searchBar');
  const voiceSearchBtn = document.getElementById('voiceSearchBtn');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

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
      const text = section.textContent.toLowerCase();
      section.style.display = text.includes(query) ? 'block' : 'none';
    });
  }
</script>
