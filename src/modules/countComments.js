const countComments = () => {
  const numberOfComments = document.querySelectorAll('.comm');
  document.getElementById('comment-Count').innerHTML = `${numberOfComments.length}`;
};
export default countComments;