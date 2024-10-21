import { TIMEOUT_SEC } from './config.js';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    // Set a timeout that rejects the promise after TIMEOUT_SEC seconds
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// Export an async function that makes an AJAX request
export const AJAX = async function (url, uploadData = undefined) {
  try {

    // If uploadData is defined, make a POST request with the data
    const fetchPro = uploadData ? fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    }) : fetch(url);

    // Wait for the fetch request to resolve or the timeout to reject
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

    const data = await res.json();

    if (!res.ok) throw Error(`${data.message} (${res.status})`);

    return data;
  } catch (err) {
    throw err;
  }
}