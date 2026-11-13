const QUESTIONS = [
  {
    "n": 1,
    "q": "Những thủ thuật tác động lên huyệt.",
    "opts": [
      "Ấn huyệt, day huyệt, điểm huyệt.",
      "Ấn huyệt, day huyệt, bấm huyệt.",
      "Điểm huyệt, day huyệt, bấm huyệt.",
      "Ấn huyệt, day huyệt, điểm huyệt, bấm huyệt."
    ],
    "a": "D"
  },
  {
    "n": 2,
    "q": "Ấn huyệt là:",
    "opts": [
      "Ấn huyệt chia làm ba thì.",
      "Dùng đầu ngón tay cái dùng sức đè vào huyệt, rồi giữ nguyên ngón cái chừng 10 đến 20 giây.",
      "Dùng ngón tay cái nhấn mạnh vào huyệt, động tác mạnh, nhanh, đột ngột.",
      "Tất cả các câu trên đều đúng."
    ],
    "a": "B"
  },
  {
    "n": 3,
    "q": "Bấm huyệt là:",
    "opts": [
      "Ấn huyệt chia làm ba thì.",
      "Dùng đầu ngón tay cái dùng sức đè vào huyệt, rồi giữ nguyên ngón cái chừng 10 đến 20 giây.",
      "Dùng ngón tay cái nhấn mạnh vào huyệt, động tác mạnh, nhanh, đột ngột.",
      "Tất cả các câu trên đều đúng."
    ],
    "a": "C"
  },
  {
    "n": 4,
    "q": "Day huyệt là:",
    "opts": [
      "Dùng ngón tay giữa để thẳng, ngón tay trỏ hơi cong lên đặt lên lưng ngón giữa, ngón cái để phía dưới bên trong ngón giữa để đỡ; tác động thẳng góc và từ từ vào huyệt, sau đó di động ngón tay theo đường tròn.",
      "Dùng ngón tay cái hay ngón giữa ấn lên huyệt người bệnh; sau đó di động ngón tay theo đường tròn, tay của thầy thuốc và da của người bệnh dính vào nhau, da người bệnh di động theo tay thầy thuốc.",
      "Dùng ngón tay cái hay ngón giữa ấn lên huyệt; sau đó di động ngón tay theo đường tròn, tay thầy thuốc và da người bệnh dính vào nhau.",
      "Dùng ngón tay cái hay ngón giữa ấn lên huyệt; sau đó di động ngón tay theo đường tròn, rồi giữ nguyên ngón cái chừng 10 đến 20 giây."
    ],
    "a": "B"
  },
  {
    "n": 5,
    "q": "Điểm huyệt là:",
    "opts": [
      "Dùng ngón tay giữa để thẳng, ngón tay trỏ hơi cong lên đặt lên lưng ngón giữa, ngón cái để phía dưới bên trong ngón giữa để đỡ cho ngón giữa; tác động thẳng góc và từ từ vào huyệt.",
      "Cách điểm chia làm ba thì.",
      "Dùng ngón tay cái nhấn mạnh vào huyệt, động tác mạnh, nhanh, đột ngột.",
      "Câu A và B đúng."
    ],
    "a": "D"
  },
  {
    "n": 6,
    "q": "Những thủ thuật tác động trên da:",
    "opts": [
      "Xát, xoa, miết, phân, hợp, véo, phát.",
      "Xát, xoa, miết, phân, hợp, day, phát.",
      "Xát, xoa, bóp, phân, hợp, véo, phát.",
      "Xát, xoa, miết, đấm, véo, lăn, phát."
    ],
    "a": "A"
  },
  {
    "n": 7,
    "q": "Những thủ thuật tác động trên cơ:",
    "opts": [
      "Day, véo, chặt, lăn, bóp, vờn, rung cơ.",
      "Xát, day, đấm, chặt, lăn, bóp, vờn, ấn, rung cơ.",
      "Day, đấm, chặt, lăn, bóp, vờn, ấn, rung cơ.",
      "Day, chặt, lăn, bóp, phân, hợp, ấn."
    ],
    "a": "C"
  },
  {
    "n": 8,
    "q": "Vận động khớp cổ:",
    "opts": [
      "Quay cổ, nghiêng cổ, ngửa cổ.",
      "Quay cổ, nghiêng cổ.",
      "Quay cổ, ngửa cổ.",
      "Quay cổ, nghiêng cổ, ngửa cổ, tổng hợp các động tác cổ."
    ],
    "a": "D"
  },
  {
    "n": 9,
    "q": "Vận động khớp vai:",
    "opts": [
      "Quay vòng nhỏ, vòng tròn rộng, ấn giãn vai.",
      "Quay vòng nhỏ, quay vòng rộng ra trước, quay vòng rộng ra sau, ấn giãn vai.",
      "Quay vòng rộng ra trước, quay vòng rộng ra sau, ấn giãn vai.",
      "Đưa tay ra trước, ra sau, dang ngang, ấn giãn vai."
    ],
    "a": "B"
  },
  {
    "n": 10,
    "q": "Vận động khớp háng:",
    "opts": [
      "Dạng háng, khép đùi, co đùi.",
      "Dạng đùi, khép đùi, ngả đùi.",
      "Ngả đùi, khép đùi, co đùi, dang đùi.",
      "Dạng háng, khép háng, ngả đùi."
    ],
    "a": "C"
  },
  {
    "n": 11,
    "q": "Xoa bóp bấm huyệt có tác dụng gì đối với sức khỏe?",
    "opts": [
      "Giảm đau.",
      "Tăng cường tuần hoàn máu.",
      "Thư giãn tinh thần.",
      "Tất cả các đáp án trên."
    ],
    "a": "D"
  },
  {
    "n": 12,
    "q": "Động tác day có tác dụng gì? (Chọn câu đúng nhất)",
    "opts": [
      "Giảm sưng, hết đau, khu phong thanh nhiệt, mềm cơ.",
      "Giảm sưng, hết đau, mềm cơ.",
      "Giảm đau, mềm cơ.",
      "Dãn cơ, giảm đau, thư giãn."
    ],
    "a": "A"
  },
  {
    "n": 13,
    "q": "Khi thực hiện xoa bóp, cần lưu ý điều gì?",
    "opts": [
      "Vệ sinh sạch sẽ.",
      "Quan sát phản ứng của bệnh nhân.",
      "Điều chỉnh lực tác động phù hợp.",
      "Tất cả đều đúng."
    ],
    "a": "D"
  },
  {
    "n": 14,
    "q": "Chống chỉ định trong xoa bóp bấm huyệt? (Chọn câu đúng nhất)",
    "opts": [
      "Đau không rõ nguyên nhân.",
      "Đau đầu, mất ngủ.",
      "Đang mắc các bệnh về da hoặc các tổ chức dưới da.",
      "Câu A và C đúng."
    ],
    "a": "D"
  },
  {
    "n": 15,
    "q": "Chỉ định trong xoa bóp vùng bụng? (Chọn câu đúng nhất)",
    "opts": [
      "Đau bụng cấp.",
      "Táo bón.",
      "Viêm ruột thừa.",
      "Câu A và B đúng."
    ],
    "a": "B"
  },
  {
    "n": 16,
    "q": "Tác dụng xoa bóp bấm huyệt trong điều trị bong gân trật khớp:",
    "opts": [
      "Giảm đau, cải thiện lưu thông máu.",
      "Giảm sưng tấy, kích thích tái tạo sụn khớp.",
      "Hỗ trợ phục hồi chức năng khớp.",
      "Tất cả đều đúng."
    ],
    "a": "D"
  },
  {
    "n": 17,
    "q": "Chỉ định xoa bóp bấm huyệt điều trị táo bón:",
    "opts": [
      "Táo bón cơ năng.",
      "Táo bón nguyên nhân do tắc ruột.",
      "Táo bón do viêm ruột cấp tính.",
      "Tất cả đều đúng."
    ],
    "a": "A"
  },
  {
    "n": 18,
    "q": "Day bấm các huyệt nào trong điều trị mất ngủ?",
    "opts": [
      "Nội quan, an miên, thần môn, tam âm giao, phong trì.",
      "An miên, thần môn, tam âm giao, bách hội, tứ thần thông.",
      "Nội quan, an miên, suất cốc, thần môn, tam âm giao.",
      "Tất cả đều đúng."
    ],
    "a": "D"
  },
  {
    "n": 19,
    "q": "Chống chỉ định xoa bóp bấm huyệt trong điều trị liệt VII ngoại biên:",
    "opts": [
      "Liệt dây thần kinh số VII ngoại biên do viêm tai giữa, zona vùng mặt trong giai đoạn cấp.",
      "Liệt dây thần kinh số VII ngoại biên do chấn thương vùng hàm mặt có chỉ định ngoại khoa.",
      "Người bệnh đang trong tình trạng cấp cứu.",
      "Tất cả đều đúng."
    ],
    "a": "D"
  },
  {
    "n": 20,
    "q": "Lợi ích xoa bóp bấm huyệt chống lão hóa:",
    "opts": [
      "Kích thích sản sinh collagen và elastin.",
      "Giảm căng thẳng và lo lắng.",
      "Giảm bọng mắt và nếp nhăn.",
      "Tất cả đều đúng."
    ],
    "a": "D"
  },
  {
    "n": 21,
    "q": "Trong điều trị hội chứng Dạ dày – Tá tràng, ấn các huyệt:",
    "opts": [
      "Chương môn, Trung quản, Thiên khu, Túc tam lý.",
      "Hợp cốc, Túc tam lý, Thái bạch, Ngư yêu.",
      "Trung quản, Thiên khu, Túc tam lý, Đại chùy.",
      "Thiên khu, Túc tam lý, Lương khâu, Thừa khấp."
    ],
    "a": "A"
  },
  {
    "n": 22,
    "q": "Chọn câu sai:",
    "opts": [
      "Chống chỉ định trong xoa bóp bấm huyệt điều trị hội chứng vai gáy là đau vai gáy trong bệnh cảnh có ép tủy cổ.",
      "Người bệnh mắc bệnh rối loạn chức năng tiền đình thường có biểu hiện chóng mặt, ù tai, hoa mắt, đau đầu, ngủ kém…",
      "Người bệnh bị liệt VII ngoại biên (P) có biểu hiện miệng méo về bên (P), mắt (P) nhắm kín.",
      "Không nên xoa bóp bấm huyệt sau ăn quá no hoặc quá đói."
    ],
    "a": "C"
  },
  {
    "n": 23,
    "q": "Chọn câu đúng nhất:",
    "opts": [
      "Xoa bóp bấm huyệt có tác dụng giảm tiết acetylcholin hoạt tính, làm cho cơ bắp hoạt động nhanh nhạy, tốt hơn.",
      "Xoa bóp bấm huyệt có tác dụng tăng thải trừ acid lactic từ cơ làm cơ giảm mệt mỏi.",
      "Tác dụng co cơ, giảm đau.",
      "Tất cả đều đúng."
    ],
    "a": "B"
  },
  {
    "n": 24,
    "q": "Thủ thuật Phát có tác dụng?",
    "opts": [
      "Làm giảm sưng, hết đau, khu phong thanh nhiệt.",
      "Thông kinh lạc, làm mềm cơ, giảm cảm giác nặng.",
      "Thông khí huyết, tán hàn, khu phong, giảm mỏi mệt.",
      "Bình can, giải uất."
    ],
    "a": "B"
  },
  {
    "n": 25,
    "q": "Hai thủ thuật chính trong việc chữa sưng là?",
    "opts": [
      "Xoa, ấn.",
      "Day, ấn.",
      "Xoa, day.",
      "Day, miết."
    ],
    "a": "C"
  },
  {
    "n": 26,
    "q": "Chỉ định xoa bóp bấm huyệt chữa bệnh cổ vai gáy:",
    "opts": [
      "Đau các dây, rễ thần kinh và đám rối thần kinh cổ có chèn ép tủy nặng.",
      "Đau cổ gáy do lạnh, do tư thế.",
      "Viêm khớp cột sống cổ cấp.",
      "Viêm quanh khớp vai kèm sốt cao."
    ],
    "a": "B"
  },
  {
    "n": 27,
    "q": "Thủ thuật Chặt là:",
    "opts": [
      "Bàn tay khum, các ngón tay khít vào nhau, giữa lòng bàn tay hơi lõm, phát đều từ nhẹ đến mạnh vào chỗ bị bệnh. Khi phát da bị đỏ lên, do áp lực không khí trong bàn tay thay đổi tác động vào da người bệnh.",
      "Hai bàn tay chập lại, mở bàn tay các ngón tay xòe ra, dùng cạnh trong của bàn tay vỗ vào nơi cần tác động của người bệnh, ngón này sẽ đập vào ngón kia phát ra tiếng kêu.",
      "Nắm hờ các ngón tay và dùng mô ngón út đấm lên nơi bị bệnh; cường độ mạnh nhiều hay ít tùy vào lớp da dày hay mỏng, song phải có tác dụng thấm sâu vào cơ.",
      "Mở bàn tay thẳng và dùng mô ngón út chặt, luân phiên liên tiếp vào chỗ bị bệnh, thường dùng ở những nơi cơ mỏng, khối cơ nông."
    ],
    "a": "B"
  },
  {
    "n": 28,
    "q": "Chọn câu chưa đúng:",
    "opts": [
      "Mất ngủ: Xoa bóp vùng đầu.",
      "Liệt dây thần kinh VII ngoại biên: Chủ yếu xoa bóp vùng mặt bên liệt.",
      "Viêm mũi dị ứng: Xoa mặt kết hợp xoa vùng mũi.",
      "Cảm cúm: Xoa bóp vùng đầu cổ gáy."
    ],
    "a": "A"
  },
  {
    "n": 29,
    "q": "Kỹ thuật xoa bóp vùng lưng thường được áp dụng cho trường hợp nào?",
    "opts": [
      "Người bị đau lưng, co rút cơ nặng.",
      "Người bị đau lưng cấp không rõ nguyên nhân.",
      "Người bị đau lưng do ung thư xương ở vùng lưng.",
      "Người bị đau lưng do thoát vị đĩa đệm có chỉ định mổ."
    ],
    "a": "A"
  },
  {
    "n": 30,
    "q": "Thủ thuật Tả trong xoa bóp là:",
    "opts": [
      "Tác động nhanh, ngược đường kinh.",
      "Tác động nhanh và thuận đường kinh.",
      "Tác động nhẹ và ngược đường kinh.",
      "Cả ba câu trên đều đúng."
    ],
    "a": "A"
  },
  {
    "n": 31,
    "q": "Huyệt Thận du có vị trí từ đường giữa đo ra 2 bên, mỗi bên 1,5 thốn và ngang khoảng:",
    "opts": [
      "Đốt sống lưng D10–D11.",
      "Đốt sống lưng D11–D12.",
      "Đốt sống thắt lưng L1–L2.",
      "Đốt sống thắt lưng L2–L3."
    ],
    "a": "D"
  },
  {
    "n": 32,
    "q": "Huyệt Ủy trung có vị trí:",
    "opts": [
      "Chính giữa nếp lằn khoeo chân đo lên 0,5 thốn.",
      "Chính giữa nếp lằn khoeo chân đo lên 1 thốn.",
      "Chính giữa nếp lằn khoeo chân.",
      "Chính giữa nếp lằn khoeo chân đo xuống 0,5 thốn."
    ],
    "a": "C"
  },
  {
    "n": 33,
    "q": "Huyệt Tam âm giao có vị trí ở bờ sau trong xương chày và:",
    "opts": [
      "Từ đỉnh cao mắt cá trong đo lên 1,5 thốn.",
      "Từ đỉnh cao mắt cá trong đo lên 3 thốn.",
      "Từ đỉnh cao mắt cá trong đo lên 2 thốn.",
      "Từ đỉnh cao mắt cá trong đo lên 2,5 thốn."
    ],
    "a": "B"
  },
  {
    "n": 34,
    "q": "Nhóm huyệt được ứng dụng trong điều trị hội chứng đau vai gáy:",
    "opts": [
      "Phong trì, kiên ngung, khúc trì.",
      "Đại chùy, thiên tông, phong thị.",
      "Phong trì, kiên tỉnh, huyết hải.",
      "Đại chùy, kiên ngung, ủy trung."
    ],
    "a": "A"
  },
  {
    "n": 35,
    "q": "Nhóm huyệt ứng dụng trong điều trị đau dây thần kinh tọa do thoát vị đĩa đệm cột sống thắt lưng:",
    "opts": [
      "Hoàn khiêu, phong thị, địa thương.",
      "Phong thị, hợp cốc, tý nhu.",
      "Thận du, hoàn khiêu, ủy trung.",
      "Đại trường du, mệnh môn, độc tỵ."
    ],
    "a": "C"
  },
  {
    "n": 36,
    "q": "XBBH không được sử dụng trong điều trị bệnh lý nào sau đây?",
    "opts": [
      "Đau cấp do căng cơ.",
      "Viêm đĩa đệm đốt sống do vi khuẩn.",
      "Liệt nửa người hoặc tứ chi sau tai biến mạch máu não.",
      "Bong gân khớp gối."
    ],
    "a": "B"
  },
  {
    "n": 37,
    "q": "Thủ thuật xoa bóp không thường dùng trong chữa đau lưng cấp:",
    "opts": [
      "Véo.",
      "Đấm.",
      "Lăn.",
      "Vặn cột sống."
    ],
    "a": "D"
  },
  {
    "n": 38,
    "q": "Đau quanh khớp vai mạn tính còn được gọi là:",
    "opts": [
      "Kiên thống.",
      "Yêu thống.",
      "Tọa cốt phong.",
      "Thất miên."
    ],
    "a": "A"
  },
  {
    "n": 39,
    "q": "Trong giai đoạn tiến triển của đau quanh khớp vai, nếu người bệnh đau từng cơn, chưa dám vận động, cần phải:",
    "opts": [
      "Ấn day trực tiếp, mạnh, nhanh các điểm đau a thị huyệt.",
      "Tác động vào các huyệt ở xa vùng đau trước.",
      "Tập vận động khớp vai.",
      "A, B, C đều đúng."
    ],
    "a": "B"
  },
  {
    "n": 40,
    "q": "Phép XBBH trong điều trị thoái hóa khớp có tác dụng:",
    "opts": [
      "Giãn cơ.",
      "Thông kinh lạc.",
      "Giảm đau.",
      "A, B, C đúng."
    ],
    "a": "D"
  },
  {
    "n": 41,
    "q": "Nhóm huyệt nào được ứng dụng trong điều trị mất ngủ? (Chọn câu sai)",
    "opts": [
      "An miên, Thần môn, Côn lôn, Suất cốc, Bách hội.",
      "Bách hội, Tứ thần thông, Suất cốc, Ấn đường, An miên.",
      "An miên, Thần môn, Phong trì, Thái dương, Nội quan.",
      "An miên, Thần môn, Phong trì, Tam âm giao, Suất cốc."
    ],
    "a": "A"
  },
  {
    "n": 42,
    "q": "Chống chỉ định trong xoa bóp điều trị mất ngủ (chọn câu sai):",
    "opts": [
      "Người bệnh đang trong tình trạng cấp cứu.",
      "Mất ngủ không thực tổn.",
      "Da bị tổn thương, có khối u ác tính vùng xoa bóp bấm huyệt.",
      "Các bệnh ưa chảy máu, vùng đang chảy máu, xuất huyết dưới da."
    ],
    "a": "B"
  },
  {
    "n": 43,
    "q": "Định nghĩa về mất ngủ:",
    "opts": [
      "Mất ngủ là một trạng thái không thỏa mãn về thời lượng và hoặc chất lượng của giấc ngủ tồn tại trong một thời gian dài, làm ảnh hưởng đến sức khỏe và khả năng làm việc của con người.",
      "Mất ngủ là một trạng thái không thỏa mãn về thời lượng và chất lượng của giấc ngủ tồn tại trong một thời gian dài, làm ảnh hưởng đến sức khỏe và khả năng làm việc của con người.",
      "Mất ngủ là trạng thái không thỏa mãn về thời lượng và chất lượng của giấc ngủ tồn tại trong một thời gian ngắn, làm ảnh hưởng đến sức khỏe và khả năng làm việc của con người.",
      "Mất ngủ là một trạng thái không thỏa mãn về thời lượng và hoặc chất lượng của giấc ngủ tồn tại trong một thời gian ngắn, làm ảnh hưởng đến sức khỏe và khả năng làm việc của con người."
    ],
    "a": "A"
  },
  {
    "n": 44,
    "q": "Chọn câu đúng nhất:",
    "opts": [
      "Kinh là những đường chạy dọc cơ thể. Lạc là những đường chạy ngang cơ thể.",
      "Kinh lạc cũng là đường xâm nhập và truyền bệnh vào cơ thể.",
      "Những rối loạn bên trong cơ thể cũng do kinh lạc phản ánh ra bên ngoài.",
      "Tất cả đều đúng."
    ],
    "a": "D"
  },
  {
    "n": 45,
    "q": "Chống chỉ định XBBH điều trị liệt nửa người do tai biến mạch máu não (chọn câu sai):",
    "opts": [
      "Người bệnh đang hôn mê.",
      "Người bệnh có vùng da loét do điểm tỳ, bệnh ngoài da vùng cần XBBH.",
      "Người bệnh liệt nửa người, không hôn mê; mạch, huyết áp, nhịp thở ổn định.",
      "Người bệnh đang hôn mê, các chỉ số mạch, huyết áp, nhịp thở chưa ổn định."
    ],
    "a": "C"
  },
  {
    "n": 46,
    "q": "Nhóm huyệt ứng dụng trong điều trị liệt thần kinh số VII ngoại biên:",
    "opts": [
      "Bách hội, Đầu duy, Dương bạch, Hạ quan, Tứ thần thông.",
      "Toản trúc, Ngư yêu, Ty trúc không, Ấn đường, Thái dương.",
      "Địa thương, Quyền liêu, Nhân trung, Phong trì, Ế phong.",
      "Tất cả đều đúng."
    ],
    "a": "D"
  },
  {
    "n": 47,
    "q": "Lời khuyên đối với bệnh nhân bị liệt thần kinh số VII ngoại biên:",
    "opts": [
      "Rửa mặt bằng nước ấm.",
      "Mang kính bảo vệ mắt khi đi ra đường.",
      "Ngủ mùng hoặc đeo miếng che mắt khi ngủ.",
      "Tất cả đều đúng."
    ],
    "a": "D"
  },
  {
    "n": 48,
    "q": "Chọn câu sai:",
    "opts": [
      "Theo y học hiện đại, liệt thần kinh số VII ngoại biên là giảm hoặc mất vận động nửa mặt của những cơ bám da mặt cùng bên do dây thần kinh VII chi phối.",
      "Người bệnh có biểu hiện miệng méo về bên liệt, mắt bên liệt nhắm không kín.",
      "Nguyên nhân thường do lạnh, chấn thương vùng hàm mặt, zona thần kinh hoặc di chứng viêm tai giữa.",
      "Theo y học cổ truyền, bệnh thuộc chứng khẩu nhãn oa tà."
    ],
    "a": "B"
  },
  {
    "n": 49,
    "q": "Bệnh viêm quanh khớp vai (chọn câu đúng nhất):",
    "opts": [
      "Viêm quanh khớp vai là tình trạng tổn thương phần mềm quanh khớp vai.",
      "Bệnh có thể khởi phát sau sang chấn hoặc tự phát.",
      "Biểu hiện chủ yếu là đau vùng khớp vai và hạn chế vận động khớp vai.",
      "Tất cả đều đúng."
    ],
    "a": "D"
  },
  {
    "n": 50,
    "q": "Chỉ định trong xoa bóp bấm huyệt điều trị bong gân trật khớp:",
    "opts": [
      "Bong gân kèm theo nhiễm trùng nặng.",
      "Bong gân đang ở giai đoạn cấp tính.",
      "Trật khớp nhẹ, đã được nắn chỉnh về vị trí bình thường.",
      "Khớp đang sưng nóng, bầm tím."
    ],
    "a": "C"
  },
  {
    "n": 51,
    "q": "Huyệt Bách hội có vị trí:",
    "opts": [
      "Trên đỉnh đầu, giao điểm đường giữa đầu và đường nối hai đỉnh tai.",
      "Giữa hai đầu trong cung lông mày.",
      "Sau gáy, giữa hai cơ thang.",
      "Ở đầu ngón giữa."
    ],
    "a": "A"
  },
  {
    "n": 52,
    "q": "Có bao nhiêu đường kinh chính?",
    "opts": [
      "12.",
      "13.",
      "14.",
      "15."
    ],
    "a": "A"
  },
  {
    "n": 53,
    "q": "Các kinh âm ở tay là:",
    "opts": [
      "Kinh Phế, kinh Tâm, kinh Vị.",
      "Kinh Tâm, kinh Tam Tiêu, kinh Thận.",
      "Kinh Phế, kinh Tâm, kinh Tâm bào.",
      "Kinh Phế, kinh Tâm, kinh Đại trường."
    ],
    "a": "C"
  },
  {
    "n": 54,
    "q": "Các kinh dương ở chân:",
    "opts": [
      "Kinh Can, kinh Đởm, kinh Bàng Quang.",
      "Kinh Vị, kinh Đởm, kinh Bàng Quang.",
      "Kinh Can, kinh Đởm, kinh Vị.",
      "Kinh Can, kinh Đởm, kinh Thận."
    ],
    "a": "C"
  },
  {
    "n": 55,
    "q": "Quy tắc đường kinh theo âm dương là:",
    "opts": [
      "Âm đi vào trong, dương ra ngoài.",
      "Âm thăng dương giáng.",
      "Âm dương lẫn lộn.",
      "Âm dương cùng tiến."
    ],
    "a": "B"
  },
  {
    "n": 56,
    "q": "Nhóm huyệt ứng dụng trong điều trị hội chứng đông cứng khớp vai:",
    "opts": [
      "Phong trì, kiên ngung, nội quan.",
      "Đại chùy, thiên tông, phong thị.",
      "Thiên tông, kiên tỉnh, kiên ngung.",
      "Phong trì, kiên ngung, ủy trung."
    ],
    "a": "C"
  },
  {
    "n": 57,
    "q": "Vận động khớp vai bao gồm các động tác:",
    "opts": [
      "Quay vòng nhỏ, quay vòng rộng ra trước, ấn giãn vai.",
      "Xoay trong, xoay ngoài, khép vai.",
      "Quay vòng rộng ra sau, dạng vai, khép vai.",
      "Tất cả đều đúng."
    ],
    "a": "D"
  },
  {
    "n": 58,
    "q": "Nhóm huyệt ứng dụng trong điều trị đau khớp gối do thoái hóa:",
    "opts": [
      "Độc tỵ, huyết hải, phong trì.",
      "Lương khâu, huyết hải, phong thị.",
      "Lương khâu, độc tỵ, huyết hải.",
      "Đại chùy, kiên ngung, ủy trung."
    ],
    "a": "C"
  },
  {
    "n": 59,
    "q": "Tạng nào có chức năng nuôi dưỡng cốt tủy, giữ cho xương chắc khỏe?",
    "opts": [
      "Tạng Thận.",
      "Tạng Tâm.",
      "Tạng Can.",
      "Tạng Phế."
    ],
    "a": "A"
  },
  {
    "n": 60,
    "q": "Màu sắc phân loại theo ngũ hành, phát biểu nào đúng?",
    "opts": [
      "Màu xanh thuộc hành Mộc.",
      "Màu đỏ thuộc hành Thổ.",
      "Màu trắng thuộc hành Thủy.",
      "Màu vàng thuộc hành Hỏa."
    ],
    "a": "A"
  }
];
