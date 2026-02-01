// Brazilian Capitals Data
const capitals = [
    { city: "Aracaju", state: "SE" },
    { city: "Belém", state: "PA" },
    { city: "Belo Horizonte", state: "MG" },
    { city: "Boa Vista", state: "RR" },
    { city: "Brasília", state: "DF" },
    { city: "Campo Grande", state: "MS" },
    { city: "Cuiabá", state: "MT" },
    { city: "Curitiba", state: "PR" },
    { city: "Florianópolis", state: "SC" },
    { city: "Fortaleza", state: "CE" },
    { city: "Goiânia", state: "GO" },
    { city: "João Pessoa", state: "PB" },
    { city: "Macapá", state: "AP" },
    { city: "Maceió", state: "AL" },
    { city: "Manaus", state: "AM" },
    { city: "Natal", state: "RN" },
    { city: "Palmas", state: "TO" },
    { city: "Porto Alegre", state: "RS" },
    { city: "Porto Velho", state: "RO" },
    { city: "Recife", state: "PE" },
    { city: "Rio Branco", state: "AC" },
    { city: "Rio de Janeiro", state: "RJ" },
    { city: "Salvador", state: "BA" },
    { city: "São Luís", state: "MA" },
    { city: "São Paulo", state: "SP" },
    { city: "Teresina", state: "PI" },
    { city: "Vitória", state: "ES" }
];

// Distance matrix between Brazilian capitals (in kilometers)
// This is a simplified matrix with approximate road distances
const distanceMatrix = {
    "Aracaju-Belém": 2340,
    "Aracaju-Belo Horizonte": 1440,
    "Aracaju-Boa Vista": 4750,
    "Aracaju-Brasília": 1650,
    "Aracaju-Campo Grande": 2680,
    "Aracaju-Cuiabá": 3100,
    "Aracaju-Curitiba": 2710,
    "Aracaju-Florianópolis": 2940,
    "Aracaju-Fortaleza": 1110,
    "Aracaju-Goiânia": 1850,
    "Aracaju-João Pessoa": 620,
    "Aracaju-Macapá": 2910,
    "Aracaju-Maceió": 290,
    "Aracaju-Manaus": 4650,
    "Aracaju-Natal": 790,
    "Aracaju-Palmas": 1790,
    "Aracaju-Porto Alegre": 3220,
    "Aracaju-Porto Velho": 4050,
    "Aracaju-Recife": 500,
    "Aracaju-Rio Branco": 4380,
    "Aracaju-Rio de Janeiro": 1840,
    "Aracaju-Salvador": 350,
    "Aracaju-São Luís": 1830,
    "Aracaju-São Paulo": 2130,
    "Aracaju-Teresina": 1420,
    "Aracaju-Vitória": 1300,
    "Belém-Belo Horizonte": 2820,
    "Belém-Boa Vista": 2320,
    "Belém-Brasília": 2120,
    "Belém-Campo Grande": 3450,
    "Belém-Cuiabá": 2760,
    "Belém-Curitiba": 3660,
    "Belém-Florianópolis": 3950,
    "Belém-Fortaleza": 1610,
    "Belém-Goiânia": 2280,
    "Belém-João Pessoa": 2230,
    "Belém-Macapá": 590,
    "Belém-Maceió": 2290,
    "Belém-Manaus": 2550,
    "Belém-Natal": 2040,
    "Belém-Palmas": 1290,
    "Belém-Porto Alegre": 4260,
    "Belém-Porto Velho": 2850,
    "Belém-Recife": 2150,
    "Belém-Rio Branco": 3270,
    "Belém-Rio de Janeiro": 3250,
    "Belém-Salvador": 2010,
    "Belém-São Luís": 810,
    "Belém-São Paulo": 3080,
    "Belém-Teresina": 1120,
    "Belém-Vitória": 2670,
    "Belo Horizonte-Boa Vista": 5470,
    "Belo Horizonte-Brasília": 720,
    "Belo Horizonte-Campo Grande": 1450,
    "Belo Horizonte-Cuiabá": 1610,
    "Belo Horizonte-Curitiba": 1010,
    "Belo Horizonte-Florianópolis": 1330,
    "Belo Horizonte-Fortaleza": 2530,
    "Belo Horizonte-Goiânia": 900,
    "Belo Horizonte-João Pessoa": 2230,
    "Belo Horizonte-Macapá": 3400,
    "Belo Horizonte-Maceió": 1740,
    "Belo Horizonte-Manaus": 4300,
    "Belo Horizonte-Natal": 2400,
    "Belo Horizonte-Palmas": 1480,
    "Belo Horizonte-Porto Alegre": 1710,
    "Belo Horizonte-Porto Velho": 3300,
    "Belo Horizonte-Recife": 2050,
    "Belo Horizonte-Rio Branco": 3630,
    "Belo Horizonte-Rio de Janeiro": 440,
    "Belo Horizonte-Salvador": 1370,
    "Belo Horizonte-São Luís": 2480,
    "Belo Horizonte-São Paulo": 590,
    "Belo Horizonte-Teresina": 2070,
    "Belo Horizonte-Vitória": 520,
    "Boa Vista-Brasília": 4750,
    "Boa Vista-Campo Grande": 4670,
    "Boa Vista-Cuiabá": 3550,
    "Boa Vista-Curitiba": 5600,
    "Boa Vista-Florianópolis": 5900,
    "Boa Vista-Fortaleza": 4930,
    "Boa Vista-Goiânia": 4630,
    "Boa Vista-João Pessoa": 5450,
    "Boa Vista-Macapá": 2710,
    "Boa Vista-Maceió": 5230,
    "Boa Vista-Manaus": 780,
    "Boa Vista-Natal": 5290,
    "Boa Vista-Palmas": 4320,
    "Boa Vista-Porto Alegre": 6200,
    "Boa Vista-Porto Velho": 2300,
    "Boa Vista-Recife": 5370,
    "Boa Vista-Rio Branco": 2720,
    "Boa Vista-Rio de Janeiro": 5730,
    "Boa Vista-Salvador": 5030,
    "Boa Vista-São Luís": 4270,
    "Boa Vista-São Paulo": 5500,
    "Boa Vista-Teresina": 4530,
    "Boa Vista-Vitória": 5390,
    "Brasília-Campo Grande": 1130,
    "Brasília-Cuiabá": 1130,
    "Brasília-Curitiba": 1370,
    "Brasília-Florianópolis": 1670,
    "Brasília-Fortaleza": 2300,
    "Brasília-Goiânia": 210,
    "Brasília-João Pessoa": 2380,
    "Brasília-Macapá": 2710,
    "Brasília-Maceió": 1890,
    "Brasília-Manaus": 3490,
    "Brasília-Natal": 2550,
    "Brasília-Palmas": 970,
    "Brasília-Porto Alegre": 2030,
    "Brasília-Porto Velho": 2580,
    "Brasília-Recife": 2200,
    "Brasília-Rio Branco": 2910,
    "Brasília-Rio de Janeiro": 1150,
    "Brasília-Salvador": 1450,
    "Brasília-São Luís": 2250,
    "Brasília-São Paulo": 1010,
    "Brasília-Teresina": 1840,
    "Brasília-Vitória": 1240,
    "Campo Grande-Cuiabá": 700,
    "Campo Grande-Curitiba": 990,
    "Campo Grande-Florianópolis": 1310,
    "Campo Grande-Fortaleza": 3340,
    "Campo Grande-Goiânia": 890,
    "Campo Grande-João Pessoa": 3420,
    "Campo Grande-Macapá": 3940,
    "Campo Grande-Maceió": 2940,
    "Campo Grande-Manaus": 3420,
    "Campo Grande-Natal": 3590,
    "Campo Grande-Palmas": 1620,
    "Campo Grande-Porto Alegre": 1380,
    "Campo Grande-Porto Velho": 2220,
    "Campo Grande-Recife": 3240,
    "Campo Grande-Rio Branco": 2550,
    "Campo Grande-Rio de Janeiro": 1570,
    "Campo Grande-Salvador": 2490,
    "Campo Grande-São Luís": 3290,
    "Campo Grande-São Paulo": 1010,
    "Campo Grande-Teresina": 2880,
    "Campo Grande-Vitória": 1870,
    "Cuiabá-Curitiba": 1680,
    "Cuiabá-Florianópolis": 2000,
    "Cuiabá-Fortaleza": 3030,
    "Cuiabá-Goiânia": 920,
    "Cuiabá-João Pessoa": 3110,
    "Cuiabá-Macapá": 3240,
    "Cuiabá-Maceió": 2630,
    "Cuiabá-Manaus": 2420,
    "Cuiabá-Natal": 3280,
    "Cuiabá-Palmas": 1310,
    "Cuiabá-Porto Alegre": 2070,
    "Cuiabá-Porto Velho": 1450,
    "Cuiabá-Recife": 2930,
    "Cuiabá-Rio Branco": 1780,
    "Cuiabá-Rio de Janeiro": 1840,
    "Cuiabá-Salvador": 2180,
    "Cuiabá-São Luís": 2580,
    "Cuiabá-São Paulo": 1690,
    "Cuiabá-Teresina": 2170,
    "Cuiabá-Vitória": 2140,
    "Curitiba-Florianópolis": 300,
    "Curitiba-Fortaleza": 3840,
    "Curitiba-Goiânia": 1240,
    "Curitiba-João Pessoa": 3490,
    "Curitiba-Macapá": 4240,
    "Curitiba-Maceió": 3000,
    "Curitiba-Manaus": 4510,
    "Curitiba-Natal": 3660,
    "Curitiba-Palmas": 2190,
    "Curitiba-Porto Alegre": 710,
    "Curitiba-Porto Velho": 3310,
    "Curitiba-Recife": 3310,
    "Curitiba-Rio Branco": 3640,
    "Curitiba-Rio de Janeiro": 850,
    "Curitiba-Salvador": 2550,
    "Curitiba-São Luís": 3790,
    "Curitiba-São Paulo": 410,
    "Curitiba-Teresina": 3380,
    "Curitiba-Vitória": 1200,
    "Florianópolis-Fortaleza": 4140,
    "Florianópolis-Goiânia": 1550,
    "Florianópolis-João Pessoa": 3790,
    "Florianópolis-Macapá": 4540,
    "Florianópolis-Maceió": 3300,
    "Florianópolis-Manaus": 4810,
    "Florianópolis-Natal": 3960,
    "Florianópolis-Palmas": 2490,
    "Florianópolis-Porto Alegre": 470,
    "Florianópolis-Porto Velho": 3610,
    "Florianópolis-Recife": 3610,
    "Florianópolis-Rio Branco": 3940,
    "Florianópolis-Rio de Janeiro": 1150,
    "Florianópolis-Salvador": 2850,
    "Florianópolis-São Luís": 4090,
    "Florianópolis-São Paulo": 710,
    "Florianópolis-Teresina": 3680,
    "Florianópolis-Vitória": 1500,
    "Fortaleza-Goiânia": 2510,
    "Fortaleza-João Pessoa": 680,
    "Fortaleza-Macapá": 2200,
    "Fortaleza-Maceió": 1030,
    "Fortaleza-Manaus": 4620,
    "Fortaleza-Natal": 540,
    "Fortaleza-Palmas": 2000,
    "Fortaleza-Porto Alegre": 4550,
    "Fortaleza-Porto Velho": 4020,
    "Fortaleza-Recife": 800,
    "Fortaleza-Rio Branco": 4350,
    "Fortaleza-Rio de Janeiro": 2980,
    "Fortaleza-Salvador": 1390,
    "Fortaleza-São Luís": 1070,
    "Fortaleza-São Paulo": 3130,
    "Fortaleza-Teresina": 630,
    "Fortaleza-Vitória": 2510,
    "Goiânia-João Pessoa": 2590,
    "Goiânia-Macapá": 2900,
    "Goiânia-Maceió": 2100,
    "Goiânia-Manaus": 3310,
    "Goiânia-Natal": 2760,
    "Goiânia-Palmas": 860,
    "Goiânia-Porto Alegre": 1800,
    "Goiânia-Porto Velho": 2400,
    "Goiânia-Recife": 2410,
    "Goiânia-Rio Branco": 2730,
    "Goiânia-Rio de Janeiro": 1340,
    "Goiânia-Salvador": 1660,
    "Goiânia-São Luís": 2440,
    "Goiânia-São Paulo": 920,
    "Goiânia-Teresina": 2050,
    "Goiânia-Vitória": 1450,
    "João Pessoa-Macapá": 2530,
    "João Pessoa-Maceió": 410,
    "João Pessoa-Manaus": 4950,
    "João Pessoa-Natal": 190,
    "João Pessoa-Palmas": 2330,
    "João Pessoa-Porto Alegre": 4190,
    "João Pessoa-Porto Velho": 4350,
    "João Pessoa-Recife": 120,
    "João Pessoa-Rio Branco": 4680,
    "João Pessoa-Rio de Janeiro": 2620,
    "João Pessoa-Salvador": 940,
    "João Pessoa-São Luís": 2120,
    "João Pessoa-São Paulo": 2910,
    "João Pessoa-Teresina": 1710,
    "João Pessoa-Vitória": 2070,
    "Macapá-Maceió": 2860,
    "Macapá-Manaus": 2230,
    "Macapá-Natal": 2610,
    "Macapá-Palmas": 1860,
    "Macapá-Porto Alegre": 4830,
    "Macapá-Porto Velho": 3440,
    "Macapá-Recife": 2720,
    "Macapá-Rio Branco": 3860,
    "Macapá-Rio de Janeiro": 3820,
    "Macapá-Salvador": 2580,
    "Macapá-São Luís": 1380,
    "Macapá-São Paulo": 3650,
    "Macapá-Teresina": 1690,
    "Macapá-Vitória": 3240,
    "Maceió-Manaus": 4660,
    "Maceió-Natal": 580,
    "Maceió-Palmas": 2040,
    "Maceió-Porto Alegre": 3500,
    "Maceió-Porto Velho": 4060,
    "Maceió-Recife": 290,
    "Maceió-Rio Branco": 4390,
    "Maceió-Rio de Janeiro": 2130,
    "Maceió-Salvador": 630,
    "Maceió-São Luís": 2080,
    "Maceió-São Paulo": 2420,
    "Maceió-Teresina": 1670,
    "Maceió-Vitória": 1580,
    "Manaus-Natal": 5290,
    "Manaus-Palmas": 3020,
    "Manaus-Porto Alegre": 5210,
    "Manaus-Porto Velho": 900,
    "Manaus-Recife": 5070,
    "Manaus-Rio Branco": 1445,
    "Manaus-Rio de Janeiro": 4730,
    "Manaus-Salvador": 4730,
    "Manaus-São Luís": 3980,
    "Manaus-São Paulo": 4480,
    "Manaus-Teresina": 4240,
    "Manaus-Vitória": 4370,
    "Natal-Palmas": 2500,
    "Natal-Porto Alegre": 4360,
    "Natal-Porto Velho": 4520,
    "Natal-Recife": 300,
    "Natal-Rio Branco": 4850,
    "Natal-Rio de Janeiro": 2790,
    "Natal-Salvador": 1110,
    "Natal-São Luís": 2290,
    "Natal-São Paulo": 3080,
    "Natal-Teresina": 1880,
    "Natal-Vitória": 2240,
    "Palmas-Porto Alegre": 2750,
    "Palmas-Porto Velho": 2770,
    "Palmas-Recife": 2160,
    "Palmas-Rio Branco": 3100,
    "Palmas-Rio de Janeiro": 2100,
    "Palmas-Salvador": 1600,
    "Palmas-São Luís": 2200,
    "Palmas-São Paulo": 1730,
    "Palmas-Teresina": 1790,
    "Palmas-Vitória": 2200,
    "Porto Alegre-Porto Velho": 3400,
    "Porto Alegre-Recife": 4100,
    "Porto Alegre-Rio Branco": 3730,
    "Porto Alegre-Rio de Janeiro": 1550,
    "Porto Alegre-Salvador": 3340,
    "Porto Alegre-São Luís": 4580,
    "Porto Alegre-São Paulo": 1120,
    "Porto Alegre-Teresina": 4170,
    "Porto Alegre-Vitória": 2240,
    "Porto Velho-Recife": 4270,
    "Porto Velho-Rio Branco": 544,
    "Porto Velho-Rio de Janeiro": 3820,
    "Porto Velho-Salvador": 3700,
    "Porto Velho-São Luís": 3950,
    "Porto Velho-São Paulo": 3570,
    "Porto Velho-Teresina": 3540,
    "Porto Velho-Vitória": 3460,
    "Recife-Rio Branco": 4600,
    "Recife-Rio de Janeiro": 2420,
    "Recife-Salvador": 830,
    "Recife-São Luís": 2010,
    "Recife-São Paulo": 2710,
    "Recife-Teresina": 1600,
    "Recife-Vitória": 1860,
    "Rio Branco-Rio de Janeiro": 4060,
    "Rio Branco-Salvador": 4030,
    "Rio Branco-São Luís": 4280,
    "Rio Branco-São Paulo": 3810,
    "Rio Branco-Teresina": 3870,
    "Rio Branco-Vitória": 3700,
    "Rio de Janeiro-Salvador": 1650,
    "Rio de Janeiro-São Luís": 2910,
    "Rio de Janeiro-São Paulo": 440,
    "Rio de Janeiro-Teresina": 2500,
    "Rio de Janeiro-Vitória": 520,
    "Salvador-São Luís": 2040,
    "Salvador-São Paulo": 1960,
    "Salvador-Teresina": 1630,
    "Salvador-Vitória": 1200,
    "São Luís-São Paulo": 3270,
    "São Luís-Teresina": 450,
    "São Luís-Vitória": 2560,
    "São Paulo-Teresina": 2860,
    "São Paulo-Vitória": 880,
    "Teresina-Vitória": 2450
};

// Emission factors (kg CO₂/km)
const emissionFactors = {
    bicycle: 0,
    car: 0.192,
    bus: 0.105,
    truck: 0.250
};

// Transport names in Portuguese
const transportNames = {
    bicycle: "Bicicleta",
    car: "Carro",
    bus: "Ônibus",
    truck: "Caminhão"
};

// DOM Elements
const originInput = document.getElementById('origin');
const destinationInput = document.getElementById('destination');
const distanceInput = document.getElementById('distance');
const manualDistanceCheckbox = document.getElementById('manualDistance');
const calculatorForm = document.getElementById('calculatorForm');
const resultsSection = document.getElementById('results');
const originSuggestions = document.getElementById('originSuggestions');
const destinationSuggestions = document.getElementById('destinationSuggestions');

// State
let selectedOrigin = null;
let selectedDestination = null;

// Autocomplete functionality
function setupAutocomplete(input, suggestionsDiv, onSelect) {
    let selectedIndex = -1;

    input.addEventListener('input', function() {
        const value = this.value.toLowerCase().trim();
        suggestionsDiv.innerHTML = '';
        selectedIndex = -1;

        if (value.length < 2) {
            suggestionsDiv.classList.remove('active');
            onSelect(null);
            return;
        }

        const matches = capitals.filter(capital => 
            capital.city.toLowerCase().includes(value)
        );

        if (matches.length > 0) {
            matches.forEach((capital, index) => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.textContent = `${capital.city} - ${capital.state}`;
                div.addEventListener('click', function() {
                    input.value = capital.city;
                    onSelect(capital.city);
                    suggestionsDiv.classList.remove('active');
                });
                suggestionsDiv.appendChild(div);
            });
            suggestionsDiv.classList.add('active');
        } else {
            suggestionsDiv.classList.remove('active');
            onSelect(null);
        }
    });

    input.addEventListener('keydown', function(e) {
        const items = suggestionsDiv.querySelectorAll('.suggestion-item');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
            updateSelection(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, -1);
            updateSelection(items);
        } else if (e.key === 'Enter' && selectedIndex >= 0) {
            e.preventDefault();
            items[selectedIndex].click();
        }
    });

    function updateSelection(items) {
        items.forEach((item, index) => {
            if (index === selectedIndex) {
                item.classList.add('selected');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('selected');
            }
        });
    }

    // Close suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target !== input && e.target !== suggestionsDiv) {
            suggestionsDiv.classList.remove('active');
        }
    });
}

setupAutocomplete(originInput, originSuggestions, function(city) {
    selectedOrigin = city;
    updateDistance();
});

setupAutocomplete(destinationInput, destinationSuggestions, function(city) {
    selectedDestination = city;
    updateDistance();
});

// Manual distance toggle
manualDistanceCheckbox.addEventListener('change', function() {
    if (this.checked) {
        distanceInput.removeAttribute('readonly');
        distanceInput.focus();
    } else {
        distanceInput.setAttribute('readonly', true);
        updateDistance();
    }
});

// Get distance between two cities
function getDistance(city1, city2) {
    if (!city1 || !city2) return null;
    
    const key1 = `${city1}-${city2}`;
    const key2 = `${city2}-${city1}`;
    
    return distanceMatrix[key1] || distanceMatrix[key2] || null;
}

// Update distance field
function updateDistance() {
    if (manualDistanceCheckbox.checked) return;
    
    if (selectedOrigin && selectedDestination) {
        const distance = getDistance(selectedOrigin, selectedDestination);
        if (distance) {
            distanceInput.value = distance;
        } else {
            distanceInput.value = '';
        }
    } else {
        distanceInput.value = '';
    }
}

// Calculate emission
function calculateEmission(distance, transport) {
    return distance * emissionFactors[transport];
}

// Generate comparisons
function generateComparisons(emission) {
    const comparisons = [];
    
    // Trees needed to offset (1 tree absorbs ~21kg CO2/year)
    const trees = Math.ceil(emission / 21);
    comparisons.push({
        icon: '🌳',
        value: trees,
        description: trees === 1 ? 'árvore por 1 ano' : 'árvores por 1 ano para compensar'
    });
    
    // Equivalent to smartphone charges (0.012 kg CO2 per charge)
    const phones = Math.ceil(emission / 0.012);
    comparisons.push({
        icon: '📱',
        value: phones,
        description: phones === 1 ? 'carga de smartphone' : 'cargas de smartphone'
    });
    
    // Equivalent to LED bulb hours (0.045 kg CO2 per hour)
    const bulbHours = Math.ceil(emission / 0.045);
    comparisons.push({
        icon: '💡',
        value: bulbHours,
        description: bulbHours === 1 ? 'hora de lâmpada LED' : 'horas de lâmpada LED'
    });
    
    return comparisons;
}

// Display results
function displayResults(data) {
    document.getElementById('emissionValue').textContent = 
        `${data.emission.toFixed(2)} kg CO₂`;
    document.getElementById('resultOrigin').textContent = data.origin;
    document.getElementById('resultDestination').textContent = data.destination;
    document.getElementById('resultDistance').textContent = data.distance;
    document.getElementById('resultTransport').textContent = data.transportName;
    
    const comparisonCardsDiv = document.getElementById('comparisonCards');
    comparisonCardsDiv.innerHTML = '';
    
    data.comparisons.forEach(comp => {
        const card = document.createElement('div');
        card.className = 'comparison-card';
        card.innerHTML = `
            <div class="icon">${comp.icon}</div>
            <span class="value">${comp.value}</span>
            <p class="description">${comp.description}</p>
        `;
        comparisonCardsDiv.appendChild(card);
    });
    
    resultsSection.classList.remove('hidden');
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Form submission
calculatorForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const origin = originInput.value.trim();
    const destination = destinationInput.value.trim();
    const distance = parseFloat(distanceInput.value);
    const transport = document.querySelector('input[name="transport"]:checked');
    
    // Validation
    if (!origin || !destination) {
        const missingFields = [];
        if (!origin) missingFields.push('origem');
        if (!destination) missingFields.push('destino');
        alert(`Por favor, preencha ${missingFields.join(' e ')}.`);
        return;
    }
    
    if (!selectedOrigin && !manualDistanceCheckbox.checked) {
        alert('Por favor, selecione uma capital válida como origem.');
        return;
    }
    
    if (!selectedDestination && !manualDistanceCheckbox.checked) {
        alert('Por favor, selecione uma capital válida como destino.');
        return;
    }
    
    if (!distance || distance <= 0) {
        alert('Por favor, insira uma distância válida.');
        return;
    }
    
    if (!transport) {
        alert('Por favor, selecione um meio de transporte.');
        return;
    }
    
    // Calculate emission
    const emission = calculateEmission(distance, transport.value);
    const comparisons = generateComparisons(emission);
    
    // Display results
    displayResults({
        emission: emission,
        origin: origin,
        destination: destination,
        distance: distance,
        transportName: transportNames[transport.value],
        comparisons: comparisons
    });
});

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registered successfully with scope: ' + registration.scope);
            })
            .catch(function(err) {
                console.error('ServiceWorker registration failed: ', err);
            });
    });
}
