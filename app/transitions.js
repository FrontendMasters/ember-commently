export default function() {
  this.transition(
    this.childOf('.comment-count'),
    this.use('toUp')
  );
}