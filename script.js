document.getElementById('quadraticForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const result = solveQuadratic(a, b, c);
    displayResult(result);
});

function solveQuadratic(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `Phương trình có hai nghiệm phân biệt: x= ${root1} và y= ${root2}`;
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return `Phương trình có nghiệm kép: ${root}`;
    } else {
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        return `Phương trình có hai nghiệm phức: ${realPart} ± ${imaginaryPart}i`;
    }
}

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>${result}</p>`;
}
