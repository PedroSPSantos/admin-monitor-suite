import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "sumelements" })
export class SumElementsPipe implements PipeTransform {
  transform(value: string): number {
    if (value) {
      let numelements: number = 0;
      let auxstring: string = "";
      let split1: string[] = [];
      let number: number[] = [];
      let j = 0;

      auxstring = value.slice(1, -1);
      split1 = auxstring.split(/[:,]/);
      for (let i = 0; i <= split1.length; i++) {
        if (!isNaN(parseInt(split1[i])) ) {
          number[j] = parseInt(split1[i]);
          j++;
        }
      }
      numelements = number.reduce((a, b) => a + b, 0);
      return numelements;
    }

    return -1;
  }
}
