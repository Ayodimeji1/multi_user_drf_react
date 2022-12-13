from rest_framework import serializers
from core.models import CustomerAddress, ProductRating, Vendor, Product, ProductCategory, Customer, Order, OrderItems


# Vendor serializer
class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ['id', 'user', 'address']

    def __init__(self, *args, **kwargs):
        super(VendorSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1


class VendorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ['id', 'user', 'address']

    def __init__(self, *args, **kwargs):
        super(VendorDetailSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1


class ProductListSerializer(serializers.ModelSerializer):
    product_ratings = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = Product
        fields = ['id', 'category', 'vendor', 'title', 'detail', 'price','product_ratings']

    def __init__(self, *args, **kwargs):
        super(ProductListSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1


class ProductDetailSerializer(serializers.ModelSerializer):
    product_ratings = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = Product
        fields = ['id', 'category', 'vendor', 'title', 'detail', 'price', 'product_ratings']

    def __init__(self, *args, **kwargs):
        super(ProductDetailSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1


# Customer serializer
class CustomerListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'user', 'phone']

    def __init__(self, *args, **kwargs):
        super(CustomerListSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1


class CustomerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'user', 'phone']

    def __init__(self, *args, **kwargs):
        super(CustomerDetailSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1


# Order serializer
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id','customer']

    def __init__(self, *args, **kwargs):
        super(OrderSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItems
        fields = ['id','order','product']

    def __init__(self, *args, **kwargs):
        super(OrderDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerAddress
        fields = ['id','customer','address','default_address']

    def __init__(self, *args, **kwargs):
        super(CustomerAddressSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1        



class ProductRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductRating
        fields = ['id','customer','product','rating','reviews','add_time']

    def __init__(self, *args, **kwargs):
        super(ProductRatingSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = ['id','title', 'description']

    def __init__(self, *args, **kwargs):
        super(CategorySerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1


class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = ['id','title','description']

    def __init__(self, *args, **kwargs):
        super(CategoryDetailSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1