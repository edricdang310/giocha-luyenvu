export interface Product {
  id: string;
  name: string;
  desc: string;
  longDesc: string;
  price: string;
  image: string;
  badge: string | null;
  tags: string[];
  ingredients: string;
  storage: string;
  serving: string;
}

export const products: Product[] = [
  {
    id: "gio-lua",
    name: "Giò Lụa",
    desc: "Giò lụa truyền thống thơm mịn, dai giòn tự nhiên, vị ngọt đậm đà từ thịt heo nóng trong ngày.",
    longDesc: "Giò Lụa Luyến Vũ là sản phẩm làm nên thương hiệu của gia đình suốt hơn 20 năm qua. Được làm từ 100% thịt heo nạc đùi tươi nóng vừa mổ xong, giã quết tay tỉ mỉ kết hợp với nước mắm cốt nguyên chất và gói thủ công bằng lá chuối tây. Giò sau khi hấp chín có màu hồng nhạt đặc trưng, thơm mùi lá chuối, vị ngọt tự nhiên, giòn dai dẻo mịn mà hoàn toàn không sử dụng hàn the hay chất bảo quản.",
    price: "Liên hệ",
    image: "/products/gio-lua.png",
    badge: "Bán chạy",
    tags: ["Tươi nóng", "Không hàn the"],
    ingredients: "Thịt heo nạc đùi (95%), mỡ heo sạch, nước mắm truyền thống, muối, gia vị tự nhiên.",
    storage: "Ngăn mát tủ lạnh (0 - 4°C) dùng trong 5-7 ngày. Ngăn đông (-18°C) giữ được 1 tháng.",
    serving: "Thái lát dùng trực tiếp ăn kèm xôi nóng, bánh mì, bánh cuốn hoặc ăn kèm cơm trắng hàng ngày."
  },
  {
    id: "gio-thuc",
    name: "Giò Thúc",
    desc: "Giò thúc giòn sần sật, béo ngậy vừa vặn, thơm nồng hạt tiêu đen và nước mắm cốt truyền thống.",
    longDesc: "Giò Thúc (hay còn gọi là Giò Tai Mũi) là sự kết hợp hoàn hảo giữa phần thịt heo nạc quết nhuyễn và tai heo, mũi heo thái mỏng giòn sần sật. Với công thức tẩm ướp gia truyền đậm đà hòa quyện với tiêu đen Phú Quốc thơm nồng, giò thúc mang đến vị ngọt thơm, béo ngậy vừa vặn và trải nghiệm nhai cực kỳ thú vị.",
    price: "Liên hệ",
    image: "/products/gio-thuc.png",
    badge: null,
    tags: ["Giòn sần sật", "Gia truyền"],
    ingredients: "Thịt heo nạc, tai heo, mũi heo, tiêu đen Phú Quốc, nước mắm cốt, gia vị gia truyền.",
    storage: "Bảo quản ngăn mát tủ lạnh (0 - 4°C) sử dụng trong 7 ngày.",
    serving: "Thái lát mỏng vừa phải, chấm kèm tương ớt hoặc muối tiêu chanh làm món nhậu lai rai cực kỳ tuyệt vời."
  },
  {
    id: "gio-long",
    name: "Giò Lòng",
    desc: "Đặc sản độc đáo kết hợp giữa lòng non dai giòn chọn lọc và thịt giò thơm ngon quết mịn tay.",
    longDesc: "Giò Lòng Luyến Vũ là món ăn đặc sản độc đáo riêng biệt được nhiều thực khách săn đón. Món ăn này là sự hòa quyện giữa lòng non, dạ dày heo được làm sạch kỹ lưỡng, luộc chín giòn kết hợp với thịt heo nạc quết mịn và một số loại rau thơm truyền thống. Sản phẩm mang hương vị bùi ngậy, dẻo dai và thơm nức lòng.",
    price: "Liên hệ",
    image: "/products/gio-long.png",
    badge: "Độc đáo",
    tags: ["Món mới", "Đặc sản"],
    ingredients: "Lòng non heo sạch, dạ dày heo, thịt heo nạc quết mịn, tiêu, nước mắm, rau thơm.",
    storage: "Ngăn mát tủ lạnh (0 - 4°C) dùng trong 3-5 ngày. Nên hấp nóng lại trước khi ăn nếu để tủ lạnh lâu.",
    serving: "Thái lát dày, ăn nóng kèm với rau sống, lá mơ và chấm mắm tôm hoặc nước mắm tỏi ớt."
  },
  {
    id: "cha-mo",
    name: "Chả Mỡ",
    desc: "Chả mỡ nướng vàng ươm, vị bùi béo ngậy tự nhiên, ăn kèm xôi nóng hoặc cơm trắng đều tuyệt đỉnh.",
    longDesc: "Chả Mỡ Luyến Vũ được chế biến từ thịt vai heo sạch có pha chút mỡ phần thái hạt lựu nhỏ, quết dẻo và đem hấp sau đó nướng vàng ươm lớp vỏ ngoài. Khi thưởng thức, chả mang vị bùi ngọt đậm đà, béo ngậy ngào ngạt tự nhiên của mỡ phần chín tới nhưng không hề ngán. Lớp vỏ ngoài dai nhẹ thơm phức làm tăng thêm độ hấp dẫn.",
    price: "Liên hệ",
    image: "/products/cha-mo.png",
    badge: "Yêu thích",
    tags: ["Bùi ngậy", "Vỏ giòn"],
    ingredients: "Thịt heo vai nạc (80%), mỡ phần heo sạch (15%), mật ong rừng tạo màu vỏ, mắm, tiêu.",
    storage: "Ngăn mát tủ lạnh sử dụng trong 7 ngày, ngăn đá sử dụng trong 1 tháng. Chiên sơ lại trước khi ăn.",
    serving: "Thái miếng mỏng ăn kèm xôi nóng, cơm trắng, hoặc ăn cùng bánh dày rất ngon."
  },
  {
    id: "moc-trang",
    name: "Mọc Trắng",
    desc: "Mọc sống quết nhuyễn mịn màng, viên canh dẻo dai, giữ nguyên vị ngọt thanh khiết của thịt heo sạch.",
    longDesc: "Mọc Trắng Luyến Vũ (hay giò sống) được quết cực kỳ kỹ lưỡng từ thịt thăn heo tươi nóng mới mổ. Giò sống đạt độ dẻo quánh, mịn màng tuyệt đối, giúp giữ nguyên vị ngọt thanh khiết của thịt heo. Đây là nguyên liệu đa dụng không thể thiếu giúp nâng tầm các món canh, lẩu trong gia đình.",
    price: "Liên hệ",
    image: "/products/moc-trang.png",
    badge: null,
    tags: ["Thanh ngọt", "Tiện lợi"],
    ingredients: "Thịt heo thăn tươi nóng sạch (97%), nước đá lạnh để giữ nhiệt độ khi xay, nước mắm, gia vị.",
    storage: "Bắt buộc bảo quản ngăn đông (-18°C) nếu chưa dùng ngay, ngăn mát chỉ giữ được trong 24 giờ.",
    serving: "Dùng thìa viên nhỏ để nấu canh cải, canh bí, thả lẩu, hoặc làm nhân nhồi mướp đắng, đậu hũ."
  },
  {
    id: "moc-nam",
    name: "Mọc Nấm",
    desc: "Mọc heo kết hợp nấm hương khô thơm lừng, giòn sần sật, gia tăng hương vị tự nhiên cho bát canh lẩu.",
    longDesc: "Mọc Nấm Luyến Vũ được làm từ mọc trắng thượng hạng trộn cùng nấm hương rừng khô ngâm nở thái nhỏ và tiêu hạt đập dập. Khi nấu chín, nấm hương tỏa hương thơm ngào ngạt quyện vào vị ngọt dẻo của mọc, tạo nên những viên mọc vừa ngọt ngào, vừa giòn nấm sần sật vô cùng đưa miệng.",
    price: "Liên hệ",
    image: "/products/moc-nam.png",
    badge: null,
    tags: ["Nấm hương", "Thơm bùi"],
    ingredients: "Mọc trắng thăn heo, nấm hương rừng khô chọn lọc, tiêu hạt, nước mắm.",
    storage: "Bảo quản ngăn đông lạnh (-18°C) lên tới 30 ngày.",
    serving: "Rã đông tự nhiên, viên tròn thả canh mọc nấm, nấu lẩu, hoặc làm mọc sốt cà chua cực ngon."
  },
  {
    id: "nem-chua-ran",
    name: "Nem Chua Rán",
    desc: "Nem rán giòn ruộm bên ngoài, dẻo dai ngọt thịt bên trong, là món ăn vặt hấp dẫn của mọi lứa tuổi.",
    longDesc: "Nem Chua Rán Luyến Vũ là món ăn vặt được yêu thích nhất. Nem được làm từ thịt heo sạch, bì heo thái sợi mỏng dai giòn và tẩm ướp thính gạo thơm phức cùng tỏi ớt dập nhỏ. Khách hàng chỉ cần lăn qua bột chiên xù và rán ngập dầu để có đĩa nem nóng hổi, giòn rụm bên ngoài nhưng dai ngọt dẻo thơm bên trong.",
    price: "Liên hệ",
    image: "/products/nem-chua.png",
    badge: "Ăn vặt",
    tags: ["Giòn ngậy", "Được yêu thích"],
    ingredients: "Thịt heo nạc, bì heo sạch thái sợi, thính gạo gia truyền, tỏi, đường, muối.",
    storage: "Bảo quản ngăn đá tủ lạnh. Khi ăn không cần rã đông hoàn toàn, chỉ cần lăn bột và chiên ngay.",
    serving: "Chiên ngập dầu đến khi vàng giòn, cắt khúc chấm tương ớt cay ngọt ăn kèm dưa chuột."
  },
  {
    id: "ruoc-heo",
    name: "Ruốc Heo",
    desc: "Ruốc bông tơi xốp, thơm lừng vị mắm cốt, ngọt thịt thăn, cực kỳ tiện lợi cho bữa sáng gia đình.",
    longDesc: "Ruốc Heo (Chà Bông) Luyến Vũ được làm hoàn toàn từ phần thịt thăn heo loại bỏ hết gân mỡ. Thịt được rim nước mắm cốt thượng hạng cho ngấm kỹ rồi giã tay thủ công và sao khô trên lửa nhỏ cho đến khi tơi xốp, vàng nhẹ và giữ được vị ngọt tự nhiên của thăn heo. Sản phẩm thơm nức mũi, không chất bảo quản, tuyệt đối an toàn cho trẻ nhỏ.",
    price: "Liên hệ",
    image: "/products/ruoc-heo.png",
    badge: null,
    tags: ["Thịt thăn sạch", "Tiện lợi"],
    ingredients: "Thịt thăn heo sạch (98%), nước mắm cốt truyền thống, muối tinh.",
    storage: "Để nơi khô ráo thoáng mát, đậy kín nắp lọ. Tốt nhất nên bảo quản trong ngăn mát tủ lạnh để giữ vị ngon lâu hơn.",
    serving: "Ăn kèm cháo trắng, xôi nóng, bánh mì, cơm cháy hoặc rắc lên cơm nguội cho bé ăn sáng tiện lợi."
  },
  {
    id: "thit-heo-gac-bep",
    name: "Thịt Heo Gác Bếp",
    desc: "Thịt heo thăn xé sợi đượm mùi khói bếp Tây Bắc, kết hợp hạt dổi, mắc khén cay thơm nồng nàn.",
    longDesc: "Thịt Heo Gác Bếp Luyến Vũ là món đặc sản lai rai được chế biến chuẩn vị Tây Bắc. Những dải thịt heo thăn to bản được tẩm ướp cùng hạt mắc khén, hạt dổi thơm nồng, ớt, tỏi, gừng rồi đem sấy trên bếp than củi cho đượm mùi khói tự nhiên. Thành phẩm dai ngon, ngọt đậm từ thớ thịt, cay tê nhẹ nơi đầu lưỡi từ gia vị Tây Bắc, cực kỳ hấp dẫn.",
    price: "Liên hệ",
    image: "/products/thit-lon-say.png",
    badge: "Đặc sản",
    tags: ["Mắc khén", "Lai rai"],
    ingredients: "Thịt heo thăn nạc sạch, hạt mắc khén, hạt dổi Tây Bắc, gừng, tỏi, sả, ớt bột.",
    storage: "Bảo quản tốt nhất trong ngăn đá tủ lạnh để tránh bị mốc khói. Khi ăn chỉ cần hấp cách thủy hoặc quay lò vi sóng 1-2 phút.",
    serving: "Hấp nóng, dùng chày đập dập cho mềm thớ thịt rồi xé dọc sợi. Chấm kèm chẩm chéo hoặc tương ớt vắt chanh."
  }
];
