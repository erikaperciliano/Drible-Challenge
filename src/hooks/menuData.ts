export interface MenuItem {
    title: string;
    submenu?: { title: string }[];
  }
  
  export const menuItems: MenuItem[] = [
    {
      title: "Casa do Menino Deus",
      submenu: [
        { title: "VOTSF" },
        { title: "A Nossa História" },
        { title: "A Nossa Identidade" },
        { title: "Documentos Essenciais" }
      ]
    },
    {
      title: "Oferta educativa",
      submenu: [
        { title: "Oferta educativa" },
        { title: "Atividades de Complemento Curricular" },
        { title: "Normas de Admissão" },
        { title: "Preçário" }
      ]
    },
    {
        title: "Ano Letivo 23/24",
        submenu: [
          { title: "Informações Úteis" },
          { title: "Calendário Escolar" },
          { title: "Ementa" },
          { title: "Galeria Atividades" },
        ]
    },
    {
        title: "E-community"
    }
  ];
  