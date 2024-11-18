import React from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {ScrollView, StatusBar, StyleSheet} from "react-native";
import NavBarTemplate from "@/components/template/NavBarTemplate";
import PageHeader from "@/components/shared/PageHeader";
import {Colors} from "@/constants/Color";
import SectionContainer from "@/components/home/SectionContainer";
import SectionTitle from "@/components/home/SectionTitle";
import FoodLifeTime from "@/components/shared/Food";
import Recipe from "@/components/shared/Recipe";
import View from "@/components/shared/View";
import {HomePageStyle} from "@/constants/Home/HomeStyle";

const HomeScreen = () => {
	const date = new Date();
	date.setDate(date.getDate() - 3);

	const safeAreaInsets = useSafeAreaInsets();
	return (
		<>
			<StatusBar barStyle={'light-content'}/>
			<ScrollView style={styles.container}>
				<PageHeader name={'홈'}/>
				<SectionContainer>
					<SectionTitle title={'유통기한이 임박한 식품'}/>
					<View style={{paddingVertical: 10}}>
						<FoodLifeTime emoji={'🫑'} name={'파프리카'} quantity={2} lifeTime={date}/>
						<FoodLifeTime emoji={'🌽'} name={'옥수수'} quantity={4} lifeTime={new Date()}/>
						<FoodLifeTime emoji={'🍕'} name={'피자'} quantity={1} lifeTime={new Date()}/>
						<FoodLifeTime.More/>
					</View>
				</SectionContainer>
				<View style={styles.content}>
					<SectionContainer>
						<SectionTitle title={'서늘한 저녁 이 음식은 어떤가요?'}/>
						<ScrollView horizontal showsHorizontalScrollIndicator={false}
						            style={{paddingVertical: 14, paddingHorizontal: 22}}>
							<Recipe
								name="김치찌개가 첨가된 아침찬"
								imageUrl="https://recipe1.ezmember.co.kr/cache/recipe/2015/06/08/fa3cd1800838bf561ea00b7552e9866a.jpg"
								cookTime="40분"
								difficulty="보통"
								onPress={() => console.log('레시피 선택')}
							/>
							<Recipe
								name="김치찌개가 첨가된 아침찬"
								imageUrl="https://recipe1.ezmember.co.kr/cache/recipe/2015/06/08/fa3cd1800838bf561ea00b7552e9866a.jpg"
								cookTime="40분"
								difficulty="보통"
								onPress={() => console.log('레시피 선택')}
							/>
							<Recipe
								name="김치찌개가 첨가된 아침찬"
								imageUrl="https://recipe1.ezmember.co.kr/cache/recipe/2015/06/08/fa3cd1800838bf561ea00b7552e9866a.jpg"
								cookTime="40분"
								difficulty="보통"
								onPress={() => console.log('레시피 선택')}
							/>
							<View style={{width: 22}}/>
						</ScrollView>
					</SectionContainer>
					<SectionContainer>
						<SectionTitle title={'🍕 냉장고에 피자가 있어 추천해요'}/>
						<ScrollView horizontal showsHorizontalScrollIndicator={false}
						            style={{paddingVertical: 14, paddingHorizontal: 22}}>
							<Recipe
								name="김치찌개가 첨가된 아침찬"
								imageUrl="https://recipe1.ezmember.co.kr/cache/recipe/2015/06/08/fa3cd1800838bf561ea00b7552e9866a.jpg"
								cookTime="40분"
								difficulty="보통"
								onPress={() => console.log('레시피 선택')}
							/>
							<Recipe
								name="김치찌개가 첨가된 아침찬"
								imageUrl="https://recipe1.ezmember.co.kr/cache/recipe/2015/06/08/fa3cd1800838bf561ea00b7552e9866a.jpg"
								cookTime="40분"
								difficulty="보통"
								onPress={() => console.log('레시피 선택')}
							/>
							<Recipe
								name="김치찌개가 첨가된 아침찬"
								imageUrl="https://recipe1.ezmember.co.kr/cache/recipe/2015/06/08/fa3cd1800838bf561ea00b7552e9866a.jpg"
								cookTime="40분"
								difficulty="보통"
								onPress={() => console.log('레시피 선택')}
							/>
							<View style={{width: 22}}/>
						</ScrollView>
					</SectionContainer>
				</View>
			</ScrollView>
			<NavBarTemplate/>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: Colors['brand'],

		paddingTop: HomePageStyle.paddingTop
	},

	content: {
		backgroundColor: Colors['surface'],

		paddingTop: 22,

		borderTopStartRadius: 18,
		borderTopEndRadius: 18,
	}
})

export default HomeScreen;