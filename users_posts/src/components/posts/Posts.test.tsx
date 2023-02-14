import { render, screen } from "@testing-library/react";
import Posts from "./Posts";

jest.mock("../../apis/postsApi");

describe("Posts", () => {
  it("should render loading state initially", () => {
    render(<Posts />);
    const loadingElement = screen.getByText(/loading posts/i);
    expect(loadingElement).toBeInTheDocument();
  });

  it("should render all posts if no userId is provided", async () => {
    render(<Posts />);
    await screen.findByText(/All posts/i);
  });

 
});
