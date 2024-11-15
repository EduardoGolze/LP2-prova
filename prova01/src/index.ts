export class ProcessadorStrings {
    calcularTamanhoDaSubstringMaisLonga(str: string): number {
      const set = new Set<string>();
      let maxLength = 0;
      let left = 0;
  
      for (let right = 0; right < str.length; right++) {
        while (set.has(str[right])) {
          set.delete(str[left]);
          left++;
        }
        set.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
      }
  
      return maxLength;
    }
  
   
    encontrarSubstringPalindromicaMaisLonga(str: string): string {
      if (str.length < 2) return str;
  
      let start = 0;
      let maxLength = 1;
  
      const expandAroundCenter = (left: number, right: number): void => {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
          const currentLength = right - left + 1;
          if (currentLength > maxLength) {
            start = left;
            maxLength = currentLength;
          }
          left--;
          right++;
        }
      };
  
      for (let i = 0; i < str.length; i++) {
        expandAroundCenter(i, i); 
        expandAroundCenter(i, i + 1); 
      }
  
      return str.substring(start, start + maxLength);
    }
  }
  
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
  