export default {
  comments: {
    lineComment: '//'
  },
  brackets: [['{', '}'], ['[', ']'], ['(', ')']],
  autoClosingPairs: [
    { open: '"', close: '"', notIn: ['string', 'comment'] },
    { open: "'", close: "'", notIn: ['string', 'comment'] },
    { open: '{', close: '}', notIn: ['string', 'comment'] },
    { open: '[', close: ']', notIn: ['string', 'comment'] },
    { open: '(', close: ')', notIn: ['string', 'comment'] }
  ],
  folding: {
    offSide: true
  }
}
