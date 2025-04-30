// Common misspellings dictionary
const commonMisspellings = {
    'teh': 'the',
    'adn': 'and',
    'thier': 'their',
    'recieve': 'receive',
    'beleive': 'believe',
    'seperate': 'separate',
    'occured': 'occurred',
    'definately': 'definitely',
    'arguement': 'argument',
    'acheive': 'achieve',
    'accomodate': 'accommodate',
    'accross': 'across',
    'agressive': 'aggressive',
    'apparant': 'apparent',
    'appearence': 'appearance',
    'becuase': 'because',
    'begginer': 'beginner',
    'benifit': 'benefit',
    'begining': 'beginning',
    'buisness': 'business',
    'calender': 'calendar',
    'catagory': 'category',
    'cemetary': 'cemetery',
    'comittee': 'committee',
    'commited': 'committed',
    'concensus': 'consensus',
    'decieve': 'deceive',
    'desireable': 'desirable',
    'diferent': 'different',
    'disapear': 'disappear',
    'embarass': 'embarrass',
    'enviroment': 'environment',
    'exagerate': 'exaggerate',
    'existance': 'existence',
    'experiance': 'experience',
    'familliar': 'familiar',
    'finaly': 'finally',
    'foriegn': 'foreign',
    'freind': 'friend',
    'goverment': 'government',
    'grammer': 'grammar',
    'happend': 'happened',
    'harrass': 'harass',
    'heigth': 'height',
    'heirarchy': 'hierarchy',
    'humourous': 'humorous',
    'ignorence': 'ignorance',
    'imediately': 'immediately',
    'independant': 'independent',
    'interuption': 'interruption',
    'irresistable': 'irresistible',
    'knowlege': 'knowledge',
    'liason': 'liaison',
    'libary': 'library',
    'lisence': 'license',
    'maintenence': 'maintenance',
    'manuver': 'maneuver',
    'millenium': 'millennium',
    'miniscule': 'minuscule',
    'mispell': 'misspell',
    'neccessary': 'necessary',
    'noticable': 'noticeable',
    'occassion': 'occasion',
    'occurance': 'occurrence',
    'persistant': 'persistent',
    'posession': 'possession',
    'potatos': 'potatoes',
    'predjudice': 'prejudice',
    'priviledge': 'privilege',
    'pronuciation': 'pronunciation',
    'psycology': 'psychology',
    'publically': 'publicly',
    'realy': 'really',
    'reccomend': 'recommend',
    'refered': 'referred',
    'relevent': 'relevant',
    'religous': 'religious',
    'rythm': 'rhythm',
    'secratary': 'secretary',
    'sieze': 'seize',
    'similer': 'similar',
    'sincerely': 'sincerely',
    'supercede': 'supersede',
    'tommorrow': 'tomorrow',
    'tounge': 'tongue',
    'truely': 'truly',
    'unforseen': 'unforeseen',
    'unfortunatly': 'unfortunately',
    'untill': 'until',
    'wierd': 'weird',
    'whereever': 'wherever',
    'whome': 'whom',
    'im': 'I\'m',
    'youre': 'you\'re',
    'theyre': 'they\'re',
    'wont': 'won\'t',
    'cant': 'can\'t',
    'dont': 'don\'t',
    'isnt': 'isn\'t',
    'wouldnt': 'wouldn\'t',
    'couldnt': 'couldn\'t',
    'shouldnt': 'shouldn\'t',
    'hasnt': 'hasn\'t',
    'havent': 'haven\'t',
    'didnt': 'didn\'t',
    'wasnt': 'wasn\'t',
    'werent': 'weren\'t',
    'arent': 'aren\'t',
    'thats': 'that\'s',
    'alot': 'a lot',
    'ur': 'your',
    'u': 'you',
    'r': 'are',
    'y': 'why',
    'coz': 'because',
    'bc': 'because',
    'b/c': 'because',
    'tbh': 'to be honest',
    'btw': 'by the way',
    'afaik': 'as far as I know',
    'approx': 'approximately',
    'dept': 'department',
    'govt': 'government',
    'mgmt': 'management',
    'ppl': 'people'
};

// Grammar rules (simple version)
const grammarRules = [
    { pattern: /\b(a)\s+([aeiou])/gi, replacement: "an $2", description: "Use 'an' before vowel sounds" },
    { pattern: /\b(i|we|they|you|he|she)\s+(is|was|am|are|were)\b/gi, check: function(match) {
        const subject = match[1].toLowerCase();
        const verb = match[2].toLowerCase();
        
        if (subject === 'i' && (verb === 'is' || verb === 'was' || verb === 'are' || verb === 'were')) 
            return subject === 'i' ? (verb === 'is' ? 'I am' : verb === 'was' ? null : verb === 'are' ? 'I am' : 'I was') : null;
        
        if ((subject === 'we' || subject === 'they' || subject === 'you') && 
            (verb === 'is' || verb === 'was' || verb === 'am')) 
            return subject + ' ' + (verb === 'is' ? 'are' : verb === 'was' ? 'were' : 'are');
        
        if ((subject === 'he' || subject === 'she') && 
            (verb === 'are' || verb === 'were' || verb === 'am')) 
            return subject + ' ' + (verb === 'are' ? 'is' : verb === 'were' ? 'was' : 'is');
        
        return null;
    }},
    { pattern: /\s+([,\.;:])/g, replacement: "$1", description: "No space before punctuation" },
    { pattern: /([,\.;:])\S/g, replacement: "$1 ", description: "Space after punctuation" },
    { pattern: /\bi\b/g, replacement: "I", description: "Capitalize 'I'" },
    { pattern: /\s{2,}/g, replacement: " ", description: "Remove multiple spaces" },
    { pattern: /\b(there|their|they're)\b/gi, check: function(match, context) {
        // Would need context analysis, just flagging as potential issues
        return null; // Just highlight for review
    }}
];

// Basic word dictionary for spell checking (would be much larger in a real implementation)
const dictionary = new Set([
    "the", "and", "is", "in", "to", "it", "that", "was", "he", "she", "they", "with", "for", "on", "as", "are", 
    "at", "be", "this", "have", "from", "or", "one", "had", "by", "word", "but", "not", "what", "all", "were", 
    "we", "when", "your", "can", "said", "there", "use", "an", "each", "which", "do", "how", "their", "if", 
    "will", "up", "other", "about", "out", "many", "then", "them", "these", "so", "some", "her", "would", 
    "make", "like", "him", "into", "time", "has", "look", "two", "more", "write", "go", "see", "number", 
    "no", "way", "could", "people", "my", "than", "first", "water", "been", "call", "who", "oil", "its", 
    "now", "find", "long", "down", "day", "did", "get", "come", "made", "may", "part", "over"
]);

// Add all words from commonMisspellings dictionary to the dictionary
for (const key in commonMisspellings) {
    dictionary.add(commonMisspellings[key]);
}

// DOM elements
let textInput, checkButton, clearButton, copyButton, outputText, suggestionContainer, statsContainer, realTimeCheckbox;

// Global state
let currentText = '';
let errorPositions = [];
let suggestions = {};
let typingTimer;

// Initialize
function init() {
    // Get DOM elements
    textInput = document.getElementById('textInput');
    checkButton = document.getElementById('checkButton');
    clearButton = document.getElementById('clearButton');
    copyButton = document.getElementById('copyButton');
    outputText = document.getElementById('outputText');
    suggestionContainer = document.getElementById('suggestionContainer');
    statsContainer = document.getElementById('stats');
    realTimeCheckbox = document.getElementById('realTimeCheck');
    
    // Add event listeners
    checkButton.addEventListener('click', checkText);
    clearButton.addEventListener('click', clearAll);
    copyButton.addEventListener('click', copyText);
    
    // Setup real-time checking if enabled
    textInput.addEventListener('input', function() {
        if (realTimeCheckbox.checked) {
            clearTimeout(typingTimer);
            typingTimer = setTimeout(checkText, 800); // Delay to prevent checking while typing
        }
        updateStats();
    });
    
    // Handle suggestion clicks
    suggestionContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('suggestion')) {
            const word = e.target.dataset.original;
            const replacement = e.target.textContent;
            replaceWord(word, replacement);
        }
    });
    
    updateStats();
}

// Check text for errors
function checkText() {
    currentText = textInput.value;
    errorPositions = [];
    suggestions = {};
    
    if (!currentText.trim()) {
        outputText.innerHTML = '<i>No text to check</i>';
        suggestionContainer.innerHTML = '';
        return;
    }
    
    // Process text
    let words = currentText.split(/\s+/);
    let processedHTML = '';
    let position = 0;
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let originalWord = word;
        
        // Remove punctuation for checking
        let cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
        
        if (cleanWord.length > 0) {
            // Check if word is misspelled
            let isMisspelled = false;
            
            // Check against common misspellings dictionary
            if (commonMisspellings.hasOwnProperty(cleanWord)) {
                isMisspelled = true;
                if (!suggestions[cleanWord]) {
                    suggestions[cleanWord] = [commonMisspellings[cleanWord]];
                }
            }
            // Check against dictionary for other misspellings
            else if (!dictionary.has(cleanWord) && cleanWord.length > 1) {
                isMisspelled = true;
                suggestions[cleanWord] = generateSuggestions(cleanWord);
            }
            
            if (isMisspelled) {
                processedHTML += `<span class="error">${originalWord}</span>`;
                errorPositions.push({
                    word: originalWord,
                    position: position
                });
            } else {
                processedHTML += originalWord;
            }
        } else {
            processedHTML += originalWord;
        }
        
        if (i < words.length - 1) {
            processedHTML += ' ';
        }
        
        position += originalWord.length + 1; // +1 for the space
    }
    
    // Check grammar using rules
    let grammarCheckedText = processedHTML;
    if (document.getElementById('grammarCheck').checked) {
        grammarRules.forEach(rule => {
            if (rule.pattern) {
                if (rule.replacement) {
                    // Simple replacement rules
                    currentText = currentText.replace(rule.pattern, rule.replacement);
                } else if (rule.check) {
                    // Complex rules that need function processing
                    let match;
                    while ((match = rule.pattern.exec(currentText)) !== null) {
                        const result = rule.check(match, currentText);
                        if (result) {
                            // Mark in the HTML
                            const matchText = match[0];
                            const pos = match.index;
                            const before = grammarCheckedText.substring(0, pos);
                            const after = grammarCheckedText.substring(pos + matchText.length);
                            grammarCheckedText = before + `<span class="error">${matchText}</span>` + after;
                            
                            // Add to suggestions
                            suggestions[matchText] = [result];
                        }
                    }
                }
            }
        });
    }
    
    // Display processed text
    outputText.innerHTML = grammarCheckedText;
    
    // Display suggestions
    displaySuggestions();
    
    // Update stats
    updateStats();
}

// Generate spelling suggestions for a misspelled word
function generateSuggestions(word) {
    const suggestions = [];
    
    // 1. Check for common misspellings
    if (commonMisspellings[word]) {
        suggestions.push(commonMisspellings[word]);
        return suggestions;
    }
    
    // 2. Try with simple edits (for demonstration - in a real application, this would be more sophisticated)
    // Check for missing apostrophes in common contractions
    if (word === 'im') suggestions.push('I\'m');
    else if (word === 'youre') suggestions.push('you\'re');
    else if (word === 'theyre') suggestions.push('they\'re');
    else if (word === 'dont') suggestions.push('don\'t');
    else if (word === 'cant') suggestions.push('can\'t');
    else if (word === 'wont') suggestions.push('won\'t');
    else if (word === 'isnt') suggestions.push('isn\'t');
    
    // 3. Try simple character swaps or insertions (simplified version)
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    
    // Try inserting each letter at each position
    for (let i = 0; i <= word.length; i++) {
        for (let j = 0; j < chars.length; j++) {
            const newWord = word.slice(0, i) + chars[j] + word.slice(i);
            if (dictionary.has(newWord) && !suggestions.includes(newWord)) {
                suggestions.push(newWord);
            }
        }
    }
    
    // Try removing one character
    for (let i = 0; i < word.length; i++) {
        const newWord = word.slice(0, i) + word.slice(i + 1);
        if (dictionary.has(newWord) && !suggestions.includes(newWord)) {
            suggestions.push(newWord);
        }
    }
    
    // Try swapping adjacent characters
    for (let i = 0; i < word.length - 1; i++) {
        const newWord = word.slice(0, i) + word[i + 1] + word[i] + word.slice(i + 2);
        if (dictionary.has(newWord) && !suggestions.includes(newWord)) {
            suggestions.push(newWord);
        }
    }
    
    // Try replacing each character
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < chars.length; j++) {
            const newWord = word.slice(0, i) + chars[j] + word.slice(i + 1);
            if (dictionary.has(newWord) && !suggestions.includes(newWord)) {
                suggestions.push(newWord);
            }
        }
    }
    
    // Limit suggestions to avoid overwhelming the user
    return suggestions.slice(0, 5);
}

// Display word suggestions
function displaySuggestions() {
    suggestionContainer.innerHTML = '';
    
    const keys = Object.keys(suggestions);
    if (keys.length === 0) {
        suggestionContainer.innerHTML = '<i>No suggestions</i>';
        return;
    }
    
    for (const word of keys) {
        const wordSuggestions = suggestions[word];
        if (wordSuggestions && wordSuggestions.length > 0) {
            const wordElement = document.createElement('div');
            wordElement.innerHTML = `<strong>"${word}"</strong> → `;
            
            wordSuggestions.forEach(suggestion => {
                const suggElement = document.createElement('span');
                suggElement.className = 'suggestion';
                suggElement.textContent = suggestion;
                suggElement.dataset.original = word;
                wordElement.appendChild(suggElement);
            });
            
            suggestionContainer.appendChild(wordElement);
        }
    }
}

// Replace word with suggestion
function replaceWord(original, replacement) {
    // Need to handle word boundaries and potential punctuation
    const regex = new RegExp('\\b' + original + '\\b', 'g');
    textInput.value = textInput.value.replace(regex, replacement);
    currentText = textInput.value;
    
    // Update UI
    checkText();
}

// Update character and word counts
function updateStats() {
    const text = textInput.value;
    const charCount = text.length;
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    const errorCount = errorPositions.length;
    
    statsContainer.innerHTML = `<p>Characters: ${charCount} | Words: ${wordCount} | Errors detected: ${errorCount}</p>`;
}

// Clear all text and results
function clearAll() {
    textInput.value = '';
    outputText.innerHTML = '';
    suggestionContainer.innerHTML = '';
    currentText = '';
    errorPositions = [];
    suggestions = {};
    updateStats();
}

// Copy corrected text
function copyText() {
    navigator.clipboard.writeText(currentText)
        .then(() => {
            const originalText = copyButton.textContent;
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
                copyButton.textContent = originalText;
            }, 2000);
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
}

// Initialize the application
window.addEventListener('DOMContentLoaded', init);