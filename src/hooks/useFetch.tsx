import { useQuery } from "@tanstack/react-query";

const useFetch = (id: any, endpoint: any) => {
  const { data, isLoading } = useQuery({
    queryKey: id,
    queryFn: async () => {
      const response = await fetch("/api/" + endpoint);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return { data, isLoading };
};

export default useFetch;
