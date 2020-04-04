// format service data from form  => db
function formatService(services = {}) {
  const res = [];
  // each service
  Object.keys(services).forEach((k) => {
    // service may be an array or a nested object
    const service = services[k] || [];
    const items = [];

    if (Array.isArray(service)) {
      service.map((v) => {
        items.push({
          id: v,
          attributes: [],
        });
      });
    } else {
      const values = service.values || {};
      Object.keys(values).forEach((v) => {
        items.push({
          id: v,
          attributes: values[v],
        });
      });
    }

    res.push({
      id: k,
      values: items,
    });
  });
  return res;
}

export default formatService;
