type HighlightOptions = {
  text: string;
  keyword: string;
  beginMark: string;
  endMark: string;
};

function highlightText({
  text,
  keyword,
  beginMark,
  endMark,
}: HighlightOptions): string {
  const searchedIndexes: number[] = [];

  while (true) {
    const fromIndex =
      searchedIndexes.length > 0
        ? searchedIndexes[searchedIndexes.length - 1] + keyword.length
        : 0;

    const searchedIndex = text.indexOf(keyword, fromIndex);

    if (searchedIndex === -1) break;

    searchedIndexes.push(searchedIndex);
  }

  let result: string = '';
  let prevIndex = 0;
  searchedIndexes.forEach((index) => {
    result += text.substring(prevIndex, index);
    result += beginMark + keyword + endMark;
    prevIndex = index + keyword.length;
  });

  if (prevIndex < text.length) {
    result += text.substring(prevIndex, text.length);
  }

  return result;
}

const text = '안녕하세요. 이향기입니다 이향기 ㅎㅇ';
const keyword = '이향기';

const highlightedText = highlightText({
  text,
  keyword,
  beginMark: '<b>',
  endMark: '</b>',
});

console.log(highlightedText);
