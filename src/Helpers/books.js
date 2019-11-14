const books = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image_url:
      "https://dynamic.indigoimages.ca/books/1408855704.jpg?quality=85&width=380&maxheight=515&lang=en",
    date: "20 Juni",
    year: "2010",
    description:
      "Harry Potter adalah seri tujuh novel fantasi yang dikarang oleh penulis Inggris J. K. Rowling. Novel ini mengisahkan tentang petualangan seorang penyihir remaja bernama Harry Potter dan sahabatnya, Ronald Bilius Weasley dan Hermione Jane Granger, yang merupakan pelajar di Sekolah Sihir Hogwarts. Inti cerita dalam novel-novel ini berpusat pada upaya Harry untuk mengalahkan penyihir hitam jahat bernama Lord Voldemort, yang berambisi untuk menjadi makhluk abadi, menaklukkan dunia sihir, menguasai orang-orang nonpenyihir, dan membinasakan siapapun yang menghalangi jalannya, terutama Harry Potter.Sejak dirilisnya novel pertama, Harry Potter and the Philosopher's Stone (di Indonesia diterbitkan dengan judul Harry Potter dan Batu Bertuah) pada tanggal 30 Juni 1997, seri ini telah mendapatkan popularitas besar, berbagai pujian kritis, dan kesuksesan komersial di seluruh dunia.[1] Beberapa kritikus juga melontarkan kritikan negatif, terutama karena temanya yang gelap. Hingga Juli 2013, seri ini telah terjual sekitar 450 juta kopi di seluruh dunia, menjadikannya sebagai novel seri paling laris sepanjang masa, dan telah diterjemahkan ke dalam 73 bahasa.Empat novel terakhir secara berturut-turut mencetak rekor sebagai buku dengan penjualan tercepat dalam sejarah. ",
    genre: "Fantasy",
    status: "Available"
  },
  {
    title: "The Lion, The Witch, and The Wardrobe",
    author: "C.S Lewis",
    image_url:
      "https://d1e4pidl3fu268.cloudfront.net/4027851c-1c97-4dce-a7a1-d380dd619ad7/lionpic.crop_713x535_0%2C0.preview.jpg",
    date: "10 Maret",
    year: "2014",
    description:
      "Sang Singa, Sang Penyihir dan Lemari (bahasa Inggris: The Lion, the Witch and the Wardrobe) adalah novel fantasi karya C. S. Lewis. Buku ini ditulis pada tahun 1950 dan mempunyai nuansa sekitar tahun 1940. Buku ini adalah yang pertama kali ditulis dari ketujuh seri The Chronicles of Narnia. Meskipun buku ini adalah yang pertama kali ditulis, tetapi secara kronologi buku ini adalah buku yang kedua setelah Keponakan Penyihir",
    genre: "Fantasy",
    status: "Empty"
  },
  {
    title: "Le Petit Prince (The Little Prince)",
    author: "Antoine de Saint-Exupéry",
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/51KHVAWDERL.jpghttps://d1e4pidl3fu268.cloudfront.net/4027851c-1c97-4dce-a7a1-d380dd619ad7/lionpic.crop_713x535_0%2C0.preview.jpg",
    date: "19 Januari",
    year: "2014",
    description:
      "Le Petit Prince (Pangeran Kecil) adalah novel karya Antoine de Saint-Exupéry yang diterbitkan pada tahun 1943. Novel dalam Bahasa Prancis ini telah diterjemahkan ke dalam lebih dari 300 bahasa dan dialek, serta terjual lebih dari 140 juta salinan hingga saat ini. Saint-Exupéry sendiri adalah seorang pelopor dunia penerbangan komersial di Eropa, Afrika, dan Amerika Selatan. Sebagai seorang penerbang, ia terlibat sebagai pejuang pembebasan Prancis dalam Perang Dunia II, yang  menjadikannya seorang Pahlawan Prancis",
    genre: "Novel",
    status: "Available"
  },
  {
    title: "She: A History Of Adventure",
    author: "H. Rider Haggard",
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/81Ccf2K0axL.jpg",
    date: "30 Desember",
    year: "2017",
    description:
      "Diterjemahkan dari bahasa Inggris-Dia, dengan subtitle A History of Adventure, adalah novel karya penulis Inggris H.Rider Haggard, yang pertama kali diserialkan di majalah The Graphic dari Oktober 1886 hingga Januari 1887. Dia sangat populer saat dirilis dan tidak pernah kehabisan cetakan",
    genre: "Adventure",
    status: "Empty"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image_url:
      "https://prodimage.images-bn.com/pimages/9780345445605_p0_v1_s550x406.jpg",
    date: "22 Desember",
    year: "2008",
    description:
      " Sang Hobbit (Bahasa Inggris:The Hobbit) adalah sebuah buku novel fantasi yang ditulis oleh J. R. R. Tolkien dengan alur cerita laksana dongeng. Buku ini pertama kali diterbitkan di Inggris pada 21 September 1937. Walaupun buku ini merupakan karya yang mandiri, seringkali Sang Hobbit dilihat sebagai novel fantasi pendahulu dari karya Tolkien selanjutnya: Penguasa seluruh Cincin (The Lord of the Rings), sebuah buku novel fantasi yang banyak diperbincangkan dan ketiga serinya (trilogi) dipublikasikan pada tahun 1954 hingga 1955.Novel ini lalu di terjemahkan dan diterbitkan dalam Bahasa Indonesia pada tahun 2002 oleh penerbit gramedia menyusul sambutan yang baik atas penayangan film dan penjualan buku trilogi The Lord of the Rings. ",
    genre: "Adventure",
    Status: "Empty"
  },
  {
    title: "The lord Of The Ring",
    author: "J.R.R. Tolkien",
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg",
    date: "15 September",
    year: "2016",
    description:
      " The Lord of the Rings adalah novel kisah fantasi epik karangan J. R. R. Tolkien.",
    genre: "Adventure",
    status: "Empty"
  },
  {
    title: "Ketika cinta bertasbih",
    author: "Habiburrahman El Shirazy",
    image_url:
      "https://scoopadm.apps-foundry.com/ebook-covers/8148/big_covers/ID_PAB2013MTH10KCB13_B.jpg",
    date: "16 November",
    year: "2016",
    description:
      "etika Cinta Bertasbih adalah sebuah novel roman Indonesia yang dikarang oleh Habiburrahman El Shirazy dan diterbitkan pada tahun 2007 oleh Republika-Basmallah.",
    genre: "Romance",
    status: "Available"
  },
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    image_url: "https://images.penguinrandomhouse.com/cover/9780451530578",
    date: "17 November",
    year: "2017",
    description:
      "A Tale of Two Cities adalah novel karya Charles Dickens yang bersetting di London dan Paris sebelum dan selama Revolusi Prancis. Karya ini terjual sebanyak 200 juta salinan di seluruh dunia.",
    genre: "Social Criticsm",
    status: "Available"
  },
  {
    title: "Dia Adalah Kakakku",
    author: "Tere Leye",
    image_url:
      "https://cdn.gramedia.com/uploads/items/207999732_Dia-Adalah-Kakakk.jpg",
    date: "18 November",
    year: "2018",
    description: "Sebuah kisah tentang pengorbanan kakak untuk adik-adiknya.",
    genre: "Drama",
    status: "Empty"
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    image_url:
      "https://images-na.ssl-images-amazon.com/images/I/91Q5dCjc2KL.jpg",
    date: "13 Juli",
    year: "2011",
    description:
      "The Da Vinci Code adalah sebuah novel detektif misteri karya Dan Brown. Novel ini menceritakan simbolog Robert Langdon dan kriptolog Sophie Neveu setelah suatu peristiwa pembunuhan di Museum Louvre",
    genre: "Detective",
    status: "Empty"
  }
];

module.exports = books;
