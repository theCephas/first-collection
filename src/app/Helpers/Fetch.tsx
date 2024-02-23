type url = string;

type method = {
  method: string;
  headers: Record<string, string>;
  body: Record<string, string>;
};

export const Fetch = async (url: url, method: method) => {
  try {
    const res: any = await fetch(
      `https://first-collectionz-kappa.vercel.app/api/${url}`,
      {
        method: method.method,
        headers: method.headers,
        body: JSON.stringify(method.body),
      }
    );
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error);
    }

    return data;
  } catch (err: any) {
    throw err;
  }
};
