import React from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'


export default function CarouselCards() {
	const isCarousel = React.useRef(null)
	const [index, setIndex] = React.useState(0)
	const  data = [
		{
			title: "ENABLE FEELING",
			body: "",
			imgUrl: "https://cdn.salla.sa/yrlRO/F6BydaCWDzhWL8aK2Cq74bcj0iQ9uk2Neljw498N.jpg",
		},
		{
			title: "TOBAC PASHA",
			body: "",
			imgUrl: "https://cdn.salla.sa/yrlRO/LY3XkhmBr2qaOx8GaKm3DxOs6XE9zyzk509kOsR8.jpg",
		},
		{
			title: "SEA WAVES",
			body: "",
			imgUrl: "https://cdn.salla.sa/yrlRO/40jdn40g76Vz0N2IPb1HSeQJcCssra7vsyGYuiDI.jpg",
		},
	];

	return (
		<View style={{marginTop:10}}>
			<Carousel
				layout="default"
				layoutCardOffset={9}
				ref={isCarousel}
				data={data}
				renderItem={CarouselCardItem}
				sliderWidth={SLIDER_WIDTH}
				itemWidth={ITEM_WIDTH}
				onSnapToItem={(index) => setIndex(index)}
				useScrollView={true}
			/>
			<Pagination
				dotsLength={data.length}
				activeDotIndex={index}
				carouselRef={isCarousel}
				dotStyle={{
					width: 10,
					height: 10,
					borderRadius: 5,
					marginHorizontal: 0,
					backgroundColor: 'rgba(0, 0, 0, 0.92)'
				}}
				inactiveDotOpacity={0.4}
				inactiveDotScale={0.2}
				tappableDots={true}
			/>
		</View>
	)
}
