export interface IBook {
  sachID: string;
  tenSach: string;
  giaBan: number;
  moTa: string;
  anhBia: string;
  ngayCapNhat: string;
  soLuongTon: number;
  maCD: string;
  maNXB: string
}
export class Book {
  constructor(
    public date= new Date().getDate(),
    public month= new Date().getMonth(),
    public year= new Date().getFullYear(),
    public sachID: string = '',
    public tenSach: string = '',
    public giaBan: number = 0,
    public moTa:string='',
    public anhBia: string = '',
    public ngayCapNhat:string = `${date}-${month+1}-${year}`,
    public soLuongTon:number = 0,
    public maCD:string = '',
    public maNXB:string = ''
  ) {}
}
