export const footerContent = {
  appointmentsLabel: "Atendimentos",
  appointmentsText:
    "Os atendimentos acontecem em datas programadas. Consulte a próxima disponibilidade antes de planejar sua visita.",
  locationLabel: "Como chegar",
  locationHref: null as string | null,
  /**
   * Enquanto não existir link do Google Maps, o botão fica oculto em vez de
   * aparecer desabilitado: sem destino, ele não tem o que oferecer.
   *
   * Nada foi removido. O JSX do estado desabilitado continua no `SiteFooter`,
   * atrás desta flag, e volta trocando o valor para `true`. Quando
   * `locationHref` receber uma URL, o botão real reaparece sozinho e esta
   * flag deixa de ter efeito.
   */
  showLocationPlaceholder: false as boolean,
  navigationLabel: "Navegação",
  socialLabel: "Social",
  instagramLabel: "Instagram",
  instagramHandle: "@draisabellymiranda",
  instagramHref: "https://www.instagram.com/draisabellymiranda/",
  firstName: "Isabelly",
  lastName: "Miranda",
  profession: "Cirurgiã-dentista",
  specialty: "Harmonização Orofacial",
  registration: "CRO-MG 72298",
  copyright: "© 2026 Isabelly Miranda",
} as const;
