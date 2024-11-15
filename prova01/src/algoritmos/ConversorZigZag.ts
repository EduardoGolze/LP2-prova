export class ConversaoZigZag {
  converter(str: string, numeroLinhas: number): string {
    if (numeroLinhas === 1 || numeroLinhas >= str.length) return str;

    const rows: string[] = Array(numeroLinhas).fill('');
    let currentRow = 0;
    let goingDown = false;

    for (let i = 0; i < str.length; i++) {
      rows[currentRow] += str[i];
      if (currentRow === 0 || currentRow === numeroLinhas - 1) goingDown = !goingDown;
      currentRow += goingDown ? 1 : -1;
    }

    return rows.join('');
  }
}
