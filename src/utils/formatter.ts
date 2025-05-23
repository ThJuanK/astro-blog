export class Formatter {
  static formatDate(value: Date): string{
    const date = new Date(value);
    return Intl.DateTimeFormat('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
    
  }
}