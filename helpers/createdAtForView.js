function formatCreatedAt (data) {
  
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    arr.push(data[i].createdAt.toISOString().slice(0,10));
  }

  return arr;
}

module.exports = formatCreatedAt;