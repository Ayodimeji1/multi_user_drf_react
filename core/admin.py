from django.contrib import admin
from .models import CustomerAddress, ProductRating, Vendor, Product, ProductCategory, Customer, Order, OrderItems

# Register your models here.
# Vendors
admin.site.register(Vendor)
admin.site.register(Product)
admin.site.register(ProductCategory)

# Customers
admin.site.register(Customer)
admin.site.register(Order)
admin.site.register(OrderItems)

admin.site.register(CustomerAddress)

admin.site.register(ProductRating)
