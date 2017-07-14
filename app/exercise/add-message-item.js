import createMessageItem from './create-message-item.js';
export default function addMessageItem(list, data) {
  const message = createMessageItem(data);
  list.appendChild(message);
}
