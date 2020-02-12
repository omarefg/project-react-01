export default async function getData(url) {
  try {
    const res = await (await fetch(url)).json();
    return res;
  } catch (error) {
    throw (error);
  }
};
