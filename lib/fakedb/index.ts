const products = [
   {
      categorie: ['sem-categoria'],
      productId: 0,
      name: 'Caneta sem tinta',
      desc: `Caneta que não possui tinta, mas ainda pode ser usada para escrever no papel com a sensação de estar escrevendo com uma caneta normal.`,
      price: 5.99,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 1.75
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   ///

   {
      categorie: ['sem-categoria'],
      productId: 1,
      name: 'Chaveiro Inútil',
      desc: `Um chaveiro que não tem nenhuma utilidade prática, ele é apenas uma peça decorativa.`,
      price: 15.99,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 5
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   ///

   {
      categorie: ['sem-categoria'],
      productId: 2,
      name: 'Fone de ouvido sem fio sem som',
      desc: `Fone de ouvido sem fio que não transmite som algum mas ainda pode ser usado para se sentir como se você estivesse ouvindo música.`,
      price: 170,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
Peso: 0,5 kg
Material: plástico
Cor: preto
Garantia: não aplicável
Marca: Inutilidade Inc.
Disponibilidade: limitada
O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
`,
      promotion: {
         discount: 30
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   ///

   {
      categorie: ['sem-categoria'],
      productId: 3,
      name: 'Relógio sem horas',
      desc: `Um relógio que não possui a capacidade de mostrar as horas, mas pode ser usado como uma peça decorativa.`,
      price: 50,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 0
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   ///

   {
      categorie: ['sem-categoria'],
      productId: 4,
      name: 'Livro sem letra',
      desc: `Um livro que possui apenas desenhos e imagens, mas não tem letras ou palavras.`,
      price: 29,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 0
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   ///

   {
      categorie: ['sem-categoria'],
      productId: 5,
      name: 'Garrafa sem água',
      desc: `Uma garrafa vazia que não pode conter nenhum líquido, mas pode ser usada como objeto decorativo.`,
      price: 39,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 0
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   //

   {
      categorie: ['sem-categoria'],
      productId: 6,
      name: 'Telefone sem bateria',
      desc: `um telefone sem bateria, que não pode ser ligado, mas pode ser usado como objeto decorativo ou como peça de teatro para representar um telefone sem bateria.`,
      price: 270,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 0
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   //

   {
      categorie: ['sem-categoria'],
      productId: 7,
      name: 'Produto genérico',
      desc: `Descrição genérica.`,
      price: 30,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 0
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   {
      categorie: ['sem-categoria'],
      productId: 7,
      name: 'Produto genérico',
      desc: `Descrição genérica.`,
      price: 30,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 0
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   {
      categorie: ['sem-categoria'],
      productId: 7,
      name: 'Produto genérico',
      desc: `Descrição genérica.`,
      price: 30,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 0
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   {
      categorie: ['sem-categoria'],
      productId: 7,
      name: 'Produto genérico',
      desc: `Descrição genérica.`,
      price: 30,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 0
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   {
      categorie: ['sem-categoria'],
      productId: 7,
      name: 'Produto genérico',
      desc: `Descrição genérica.`,
      price: 30,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 0
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   {
      categorie: ['sem-categoria'],
      productId: 7,
      name: 'Produto genérico',
      desc: `Descrição genérica.`,
      price: 30,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 0
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   {
      categorie: ['sem-categoria'],
      productId: 7,
      name: 'Produto genérico',
      desc: `Descrição genérica.`,
      price: 30,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 0
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   {
      categorie: ['sem-categoria'],
      productId: 7,
      name: 'Produto genérico',
      desc: `Descrição genérica.`,
      price: 30,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 0
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   {
      categorie: ['sem-categoria'],
      productId: 7,
      name: 'Produto genérico',
      desc: `Descrição genérica.`,
      price: 30,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 0
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   {
      categorie: ['sem-categoria'],
      productId: 7,
      name: 'Produto genérico',
      desc: `Descrição genérica.`,
      price: 30,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 0
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   {
      categorie: ['sem-categoria'],
      productId: 7,
      name: 'Produto genérico',
      desc: `Descrição genérica.`,
      price: 30,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 0
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   {
      categorie: ['sem-categoria'],
      productId: 7,
      name: 'Produto genérico',
      desc: `Descrição genérica.`,
      price: 30,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 0
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   {
      categorie: ['sem-categoria'],
      productId: 7,
      name: 'Produto genérico',
      desc: `Descrição genérica.`,
      price: 30,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 0
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   {
      categorie: ['sem-categoria'],
      productId: 7,
      name: 'Produto genérico',
      desc: `Descrição genérica.`,
      price: 30,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 0
      },
      variation: ['p', 'm', 'g', 'gg']
   },

   {
      categorie: ['sem-categoria'],
      productId: 7,
      name: 'Produto genérico',
      desc: `Descrição genérica.`,
      price: 30,
      image: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOFz14W9e_QqTgmb2czw_34f381McT1-mcg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCrTYAxoPa9oujemrFGurHn155Me66_ATrbw&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVduVqRrTtUsDXMO3xi4GSYq_OYB2qMWL1Yg&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6stkd4ikOa24HWu93HdgKSl_omgYHOpPWQ&usqp=CAU'
      ],
      info: `Tamanho: 10cm x 10cm x 10cm
   Peso: 0,5 kg
   Material: plástico
   Cor: preto
   Garantia: não aplicável
   Marca: Inutilidade Inc.
   Disponibilidade: limitada
   O Não-Faz-Nada 3000 é uma obra de arte inútil que foi desenvolvida pela marca Inutilidade Inc. Com seu design minimalista e elegante, ele é perfeito para aqueles que procuram um dispositivo inútil para adicionar à sua coleção. Com tamanho e peso compacto, ele é fácil de transportar e armazenar. Ele é feito de plástico de alta qualidade, garantindo sua durabilidade. A disponibilidade é limitada, então garanta o seu agora antes que seja tarde demais.
   `,
      promotion: {
         discount: 0
      },
      variation: ['p', 'm', 'g', 'gg']
   }
]
export default products
