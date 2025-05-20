<script>
    const placeholders = [
        "Search for Saree",
        "Search for Shirt",
        "Search for Gown",
        "Search for Lehenga",
        "Search for Kurti",
        "Search for Dupatta",
        "Search for Sherwani",
        "Search for Blouse",
        "Search for Accessories"
    ];

    const input = document.getElementById('searchInput');
    let wordIndex = 0;
    let charIndex = 0;
    let typing = true;

    function typePlaceholder() {
        const currentWord = placeholders[wordIndex];

        if (typing) {
            input.placeholder = "Search for " + currentWord.slice(0, charIndex++);
            if (charIndex > currentWord.length) {
                typing = false;
                setTimeout(typePlaceholder, 1000); // Wait before backspacing
                return;
            }
        } else {
            input.placeholder = "Search for " + currentWord.slice(0, --charIndex);
            if (charIndex === 0) {
                typing = true;
                wordIndex = (wordIndex + 1) % placeholders.length;
            }
        }

        setTimeout(typePlaceholder, typing ? 100 : 50);
    }

    // Start the animation
    typePlaceholder();
</script>
