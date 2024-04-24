type url = string;

type method = {
  method: string;
  headers: Record<string, string>;
  body?: any;
};

export const Fetch = async (url: url, method: method) => {
  try {
    const res: any = await fetch(
      `https://first-collectionz.onrender.com/${url}`,
      {
        method: method.method,
        headers: method.headers,
        body: JSON.stringify(method.body),
      }
    );
    const data = await res.json();

    if (!res.ok) {
      if (data.error) {
        throw new Error(data.error);
      }
      if (data.detail) {
        throw new Error(data.detail);
      }
    }

    return data;
  } catch (err: any) {
    throw err;
  }
};
