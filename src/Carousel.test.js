import { render, fireEvent} from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";



// Smoke Test
it("Renders without crashing", function () {
  render(<Carousel
    photos={TEST_IMAGES}
    title="Test Carousel" />);
});


// Snapshot Test
it('matches the snapshot', () => {
  const {asFragment} = render(
    <Carousel photos={TEST_IMAGES} title="Test Carousel"/>
  );
  expect(asFragment()).toMatchSnapshot();
});


// Right arrow
it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});


// Left Arrow click
it("Works when you click the left arrow", () => {
  const { container } = render(
    <Carousel 
      photos={ TEST_IMAGES }
      title="images for testing"/>
  );

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  // Move backward in the Carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // Expect the first image to show but not the second.
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
});


// No left arrow display for first image.
it("works for no left arrow", () => {
  const { container } = render(
    <Carousel 
      photos={ TEST_IMAGES }
      title="images for testing"/>
  );
  // Checks that the left arrow isn't displayed in the first image.
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  expect(leftArrow).toBeNull();
});


// No right arrow display for last image
it("works for no right arrow", () => {
  const { container } = render(
    <Carousel 
      photos={ TEST_IMAGES }
      title="images for testing"/>
  );
  // moves to the last img
  const lastImgIdx = TEST_IMAGES.length - 1;
  const{container: lastImgContainer} = render(<Carousel 
    photos={ TEST_IMAGES }
    title="images for testing"/>);
  // checks that the right arrow isnt display in the last image.
  const rightArrow = lastImgContainer.querySelector(".bi bi-arrow-right-circle");
  expect(rightArrow).toBeNull();
})
